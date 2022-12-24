import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect( _ => {
        setTimeout( _ => {
            fetch('http://localhost:8000/blogs')
             .then(res => res.json())
             .then(data => {
                setBlogs(data);
                setIsPending(false)
        })}, 1000)}, []); // I want it one time only after loading the page

    return (
        <div className="home">
            { isPending && <div>Loading...</div>}
            {/* <BlogList blogs={blogs} title='All Blogs!'/> => will not work and gets an error */}
            { blogs && <BlogList blogs={blogs} title='All Blogs!'/> } {/* && => checks left side first */}
        </div>
    );
}

export default Home;