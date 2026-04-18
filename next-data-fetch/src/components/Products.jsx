import Link from "next/link";

const ProductsPage = ({ prod }) => {
    // console.log(prod);

    const {description, price, name} = prod;

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {description}
                </p>
                <div className="card-actions justify-end">
                    <Link href={`/products/${id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
