

# How Install

install nodejs

npm install -g typescript

npm init

npm install --save-dev typescript

npm install --save-dev @types/node

npm install --save express

npm install --save-dev @types/express

npm install --save-dev ts-node-dev

npm install --save-dev tsconfig-paths

"scripts": {
    "build": "tsc -p .",
    "start": "node ./dist/index.js",
    "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts"
}
