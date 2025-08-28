import http,{IncomingMessage,ServerResponse} from 'http';


const PORT=6000

//creating a server
const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.writeHead(200,{'Content-Type':'json/application'});
    res.end(JSON.stringify({message:"Hello World"}));
});



server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


