import { defineConfig, type ServerOptions, type UserConfig } from "vite";

import proxy from "./src/http/proxy";

const server: ServerOptions = { proxy };

const config: UserConfig = { server };

export default defineConfig(config);
