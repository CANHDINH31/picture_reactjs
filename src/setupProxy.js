const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use('/detailinfo/:id', createProxyMiddleware({ target:'https://apipcd.herokuapp.com/', changeOrigin: true }));
    app.use('/apijson/:type/:page', createProxyMiddleware({ target:'https://apipcd.herokuapp.com/', changeOrigin: true }));
    app.use('/apidetailsjson/:id', createProxyMiddleware({ target:'https://apipcd.herokuapp.com/', changeOrigin: true }));
    app.use('/apicategoryjson/:params', createProxyMiddleware({ target:'https://apipcd.herokuapp.com/', changeOrigin: true }));
}
