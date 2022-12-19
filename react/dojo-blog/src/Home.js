import { useState } from 'react'

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'DR4', id: 1 }, 
        { title: 'Hello Programming', body: 'lorem ipsum...', author: 'DO4', id: 2 }, 
        { title: 'Front-End Web Development', body: 'lorem ipsum...', author: 'Moustafa', id: 3 }, 
    ]);

    return (
        <div className="home">
            {/* 
            => DRY => Don't repeat yourself
            => if we used 3 divs to do the task that means we hard code it 
            => we need it to be reactive 
            */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> {/* react use key to track changes */} 
                    <h2>{ blog.title }</h2>
                    <p>Written by: {blog.author}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Home;