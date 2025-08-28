import http,{IncomingMessage,ServerResponse} from 'http';





const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.writeHead(200,{'Content-Type':'json/application'});
    res.end('Hello World');
});

server.listen(8000);


