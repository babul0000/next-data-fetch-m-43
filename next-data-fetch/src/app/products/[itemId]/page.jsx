export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data.map((item) => ({
        itemId: item.id.toString(),
    }));
};

const DaynamicId = async ({ params }) => {
    const { itemId } = params;

    const res = await fetch(
        `http://localhost:5000/products/${itemId}`
    );
    const data = await res.json();

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">
                Item ID: {itemId}
            </h2>

            <p className="text-lg">
                Name: {data.name}
            </p>

            <p>Price: {data.price}</p>
        </div>
    );
};

export default DaynamicId;