import { IncomingMessage, ServerResponse } from "http";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/productControler";
import { write } from "fs";


export const productRoutes=(req:IncomingMessage,res:ServerResponse)=>{
    // destructure req
    const {method, url}=req
    const id=url?.split("/")[2]
    //start of get route
    if(req.url?.startsWith("/products") && req.method==="GET"){
        //if id is present
        if(id){
            //get the product for array
            const product=getProductById(id)
            //write the response header 200 if found and 404 if not
            res.writeHead(product?200:404,{'Content-Type':'json/application'})
            //write the response body
            res.end(JSON.stringify(product || {message:"Product not found"}))
        }else{
            //get all products if no id in the url
            const products=getAllProducts()
             //write the response header 200 if found and 404 if not
            res.writeHead(200,{'Content-Type':'json/application'})
            //write the response
            res.end(JSON.stringify(products))
        }
    } // end of  get request if statement

    //start of post route
    if(req.url?.startsWith("/products") && req.method==="POST"){
        let body="" //body variable 
        //req.on is an event listener "data"
        req.on("data",chunk=>{ //listening for and event because we are recieving data in chunks
            body+=chunk.toString() //convert the chunk to a string
        })
        req.on("end",()=>{ //listening for the end of the request
            const product=JSON.parse(body) //converting to javascript object
            addProduct(product) //calling the add function and passing the product
            res.writeHead(201,{'Content-Type':'json/application'}) //writing the response header
            res.end(JSON.stringify(product)) //writing the response body  
        })

    } //end of post 
    
    // statr update route same as post only differennce is the method
    if(req.url?.startsWith("/products") && req.method==="PUT"){
        let body=""//body
        req.on("data",chunk=>{
            body+=chunk.toString()
        })
        req.on("end",()=>{
            const product=JSON.parse(body) 
            updateProduct(product)
            res.writeHead(200,{'Content-Type':'json/application'})

    })
    }//end of put body

    //start of delete route
    if(req.url?.startsWith("/products") && req.method==="DELETE"){
        if(id){
            deleteProduct(id)
            res.writeHead(200,{'Content-Type':'json/application'})
            res.end(JSON.stringify({message:"Product deleted"}))
        }}
    }//end of delete route