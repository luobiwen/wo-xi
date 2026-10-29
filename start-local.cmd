@echo off
cd /d "%~dp0local-preview"
"C:\Users\wps\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" node_modules\vite\bin\vite.js --configLoader native --host 127.0.0.1 --port 3000
pause
