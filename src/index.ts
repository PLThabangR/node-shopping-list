import http,{IncomingMessage, ServerResponse} from "http";





const app = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
   
    res.end(JSON.stringify({message:"Hello World"}));

}

//creating our server and passing our app
const server = http.createServer(app);

const PORT= 5000
server.listen(PORT, () => {
    console.log("Server is running on port 5000");
}); 