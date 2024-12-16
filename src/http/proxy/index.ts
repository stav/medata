import type { ProxyOptions } from "vite";

import api from "./api";

export default <Record<string, string | ProxyOptions>>{
  // '/foo': 'http://localhost:4567', // /foo -> http://localhost:4567/foo
  "/api": api,
};
