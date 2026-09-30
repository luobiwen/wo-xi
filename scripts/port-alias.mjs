import http from "node:http";
import net from "node:net";

const targetPort = Number(process.argv[2]);
const listenPorts = process.argv.slice(3).map(Number).filter(Boolean);

if (!targetPort || !listenPorts.length) {
  throw new Error("Usage: node scripts/port-alias.mjs <target-port> <listen-port...>");
}

for (const listenPort of listenPorts) {
  const server = http.createServer((request, response) => {
    const upstream = http.request({
      hostname: "127.0.0.1",
      port: targetPort,
      path: request.url,
      method: request.method,
      headers: request.headers,
    }, (upstreamResponse) => {
      response.writeHead(upstreamResponse.statusCode || 502, upstreamResponse.headers);
      upstreamResponse.pipe(response);
    });

    upstream.on("error", () => {
      if (!response.headersSent) response.writeHead(502, { "content-type": "text/plain; charset=utf-8" });
      response.end("青柠排版服务暂时不可用");
    });
    request.pipe(upstream);
  });

  server.on("upgrade", (request, socket, head) => {
    const upstream = net.connect(targetPort, "127.0.0.1", () => {
      upstream.write(`${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`);
      for (const [name, value] of Object.entries(request.headers)) {
        if (Array.isArray(value)) value.forEach((item) => upstream.write(`${name}: ${item}\r\n`));
        else if (value !== undefined) upstream.write(`${name}: ${value}\r\n`);
      }
      upstream.write("\r\n");
      if (head.length) upstream.write(head);
      socket.pipe(upstream).pipe(socket);
    });
    upstream.on("error", () => socket.destroy());
  });

  server.listen(listenPort, "127.0.0.1", () => {
    process.stdout.write(`http://localhost:${listenPort}/ -> http://localhost:${targetPort}/\n`);
  });
}
