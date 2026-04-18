
const apiData = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

const PostPage = async() => {
    const value = await apiData();
    console.log(value);
    
    return (
        <div>
            <h2>post page</h2>
        </div>
    );
};

export default PostPage;