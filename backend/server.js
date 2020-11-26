import express from 'express';
import data from './data.js'; /*imprtant!!!!: in server side we need .js !!!!!! */

/*want to create an express server */

const app = express();

app.get('/api/products/:id',(req, res) =>{
    const product = data.products.find(x=> x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "Product Not Found"});
    }
});
app.get('/api/products',(req,res)=>{
    res.send(data.products);
});/*when enter /api/products then we return an array */
app.get('/',(req, res)=>{ /*handler that accept req and res */
    res.send("server is ready");/*when open server it shows: server is ready , we respond*/
});
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
});