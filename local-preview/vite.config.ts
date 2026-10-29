import {defineConfig} from 'vite';
import path from 'node:path';
import tailwind from '@tailwindcss/postcss';
export default defineConfig({publicDir:'../public',resolve:{alias:{'react-dom':path.resolve('node_modules/react-dom'),'react':path.resolve('node_modules/react')}},css:{postcss:{plugins:[tailwind()]}},server:{fs:{allow:['..']}}});
