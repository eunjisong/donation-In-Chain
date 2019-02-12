const next = require('next');
const { createServer } = require('http');

const app = next({ dev: process.env.NODE_ENV !== 'production' })

const routes = require('./front-end/routes');

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if(err) throw err;
    console.log('Running on LocalHost:3000')
  })
})
