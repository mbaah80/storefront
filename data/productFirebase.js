import firebaseApp from "~~/firebase";
let Products = []
 const ProductsData = () =>{
    const db = firebaseApp.db;
    db.collection("products").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let product = doc.data()
                product.id = doc.id;
                Products.push(product)
            });
        })
        .catch((error)=>{
            console.log(error)
        })
}
ProductsData()

export default {
    "data": Products
}

