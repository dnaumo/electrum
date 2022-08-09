const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
  target: "http://server:7000",
  changeOrigin: true,
  pathRewrite: { "^/api": "" },
};

module.exports = function (app) {
  app.use("/api", createProxyMiddleware(proxy));
};
