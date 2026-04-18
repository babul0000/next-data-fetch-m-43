

const DaynamicId = async({params}) => {
    const { itemId} = await params;

    const res = await fetch(`http://localhost:5000/products/${itemId}`)
    const data =await res.json()
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">Item ID: {itemId}</h2>
            <p>ID Length: {data.name}</p>
        </div>
    );
};

export default DaynamicId;