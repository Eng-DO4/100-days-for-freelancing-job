import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect( () => {
        fetch('http://localhost:8000/blogs').then(res => res.json()).then(data => setBlogs(data));
    }, []); // I want it one time only after loading the page

    return (
        <div className="home">
            {/* <BlogList blogs={blogs} title='All Blogs!'/> => will not work and gets an error */}
            { blogs && <BlogList blogs={blogs} title='All Blogs!'/> } {/* && => checks left side first */}
        </div>
    );
}

export default Home;