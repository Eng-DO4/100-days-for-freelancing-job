// we don't seperate lists themselves but only the functionality

const BlogList = ({blogs, title} /* destructuring is easier */) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    <h2>{ blog.title }</h2>
                    <p>Written by: {blog.author}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default BlogList;