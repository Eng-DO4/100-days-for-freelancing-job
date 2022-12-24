import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect( () => {
        
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!'/>
        </div>
    );
}

export default Home;