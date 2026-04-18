import ProductsPage from "@/components/Products";

const create = async() => {
    const res = await fetch("http://localhost:5000/products", {cache: "force-cache"});
    return res.json()
}
const Products = async() => {
    const data = await create();
    console.log(data);
    
    return (
        <div>
            <h1>product length: {data.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.map(prod => <ProductsPage key={prod.id} prod={prod}>

                    </ProductsPage>)
                }
            </div>
        </div>
    );
};

export default Products;