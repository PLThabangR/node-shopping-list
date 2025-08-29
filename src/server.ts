import http,{IncomingMessage,ServerResponse} from 'http';
import { productRoutes } from './routes/productRoutes';


const PORT=6000

//creating a server
const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
if(req.url?.startsWith("/products")){
    //call product routes logic
    productRoutes(req,res)
}else{
    //if route not found 
    res.writeHead(404,{'Content-Type':'application/json'})
    res.end(JSON.stringify({message:"Route not found"}))
}
});



server.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));


