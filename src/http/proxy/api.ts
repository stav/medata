import type { HttpProxy, ProxyOptions } from "vite";

const baseUrl = "http://rs.medstar.agency";

export default <ProxyOptions>{
  target: baseUrl,
  changeOrigin: true,
  secure: false,
  logger: console,
  rewrite: (path: string) => path.replace(/^\/api/, ""),
  configure: (proxy: HttpProxy.Server, _options: ProxyOptions) => {
    proxy.on("error", (err, _req, _res) => {
      console.log("proxy error", err);
    });
    proxy.on("proxyReq", (proxyReq, req, _res) => {
      const path = req.url;
      const url = `"${baseUrl}${path}"`;
      console.log("Proxy Send Req:", req.method, url, req.headers);
    });
    proxy.on("proxyRes", (proxyRes, req, _res) => {
      const path = req.url;
      console.log("Proxy Recv Res:", proxyRes.statusCode, path);
    });
  },
};
