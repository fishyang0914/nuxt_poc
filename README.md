# poc

> My legendary Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# deploy 部署方式有下面兩種(需安裝pm2 & pm2-logrotate)
```bash
# 直接下cmd
npm run build && pm2 start node_modules/nuxt/bin/nuxt.js --name "nuxt_poc" -- start --port 3002 --env production

# 透過config(推薦)
npm run build && pm2 start ecosystem.config.js --env production
```

# eslint + prettier
建議使用vscode plugin Perttier-Code foematter
將.prettierrc的設定與plugin設定同步，存檔後會自動修正coding style