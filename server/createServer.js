export default function createServer(httpServer, port) {
    httpServer.listen(process.env.PORT, () => {
        console.log(`Escuchando en el puerto ${process.env.PORT} -  WORKER ${process.pid}`)
    })
}