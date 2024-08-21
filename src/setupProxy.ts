const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: any) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://campaign-demo-g6lg7lulsq-uc.a.run.app',
            changeOrigin: true,
        })
    );
};
