import HttpServer from "./src/http_server";

const httpServer = HttpServer()
httpServer.requestSystemInitiation()
process.on('SIGTERM', httpServer.requestSystemTermination);
process.on('SIGINT', httpServer.requestSystemTermination);