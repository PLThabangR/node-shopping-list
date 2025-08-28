import { Product } from "../types/product"; 


//type annotation
let products:Product[]=[]  


export const addProduct=(product:Product)=>{
    products.push(product)
}
//get all products
export const getAllProducts=():Product[]=>{
    return products
}

export const getProductById=(id:string)=>{
    //return song by id using find method
    return products.find((p)=>p.id===id)
}

//update array
export const updateProduct=(product:Product)=>{
    products=products.map((p)=>{
         return p.id===product.id?product:p
    })
}

//delete product
export const deleteProduct=(id:string)=>{
    products=products.filter((p)=>p.id!==id)
}

