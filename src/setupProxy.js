const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'http://localhost:8000',
            target: process.env.REACT_APP_API_SERVER,
            changeOrigin: true,
        })
    );
};