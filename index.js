import HttpServer from "./src/http_server";

const httpServer = HttpServer()
if (import.meta.env.PROD) {
  httpServer.requestSystemInitiation()
  process.on('SIGTERM', httpServer.requestSystemTermination)
  process.on('SIGINT', httpServer.requestSystemTermination)
}
export const viteNodeApp = httpServer.toDevelopmentServer()
