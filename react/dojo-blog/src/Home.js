import { useEffect, useState } from 'react'; // don't forget to import it first
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'DR4', id: 1 }, 
        { title: 'Hello Programming', body: 'lorem ipsum...', author: 'DO4', id: 2 }, 
        { title: 'Front-End Web Development', body: 'lorem ipsum...', author: 'Moustafa', id: 3 }, 
    ]);

    // we declare it here and call it there to interact directly with data
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( _ => console.log('a change in dom')); // print in console with any change in dom

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;