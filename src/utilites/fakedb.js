const addToDb=id=>{
    const exists=localStorage.getItem("shooping_cart");

    
    let shopping_cart={};

    if(!exists){
        shopping_cart[id]=1;
        
    }
    else{
        shopping_cart=jest.parse(exists);
        if(shopping_cart[id]){
            const newCount=shopping_cart[id]+1;
            shopping_cart[id]=newCount;
        }
        const newCount=parseInt(exists)+1;
        localStorage.setItem(id,newCount);


    }
}
localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));
const updateDb=
const getDb=()=>localStorage.getItem('shopping_cart');
const removeDb=id=>{
    const exists=getDb();
    if(!exists){
        console.log(id);
        addToDb(id);

    }
    const handleRemove = id=>{
        deleteFormDb(id);
    }
    else{
        const shopping_cart=JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);

    }

}
export {addToDb}