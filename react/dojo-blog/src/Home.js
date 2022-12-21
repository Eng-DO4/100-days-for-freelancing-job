import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'DR4', id: 1 }, 
        { title: 'Hello Programming', body: 'lorem ipsum...', author: 'DO4', id: 2 }, 
        { title: 'Front-End Web Development', body: 'lorem ipsum...', author: 'Moustafa', id: 3 }, 
    ]);

    const [name, setName] = useState('Dr4');

    // we declare it here and call it there to interact directly with data
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('a change in dom');
        name !== 'Dr4' ? console.log('the name has changed to', name) : console.log('still ', name);
    // }, []); // empty array for running func with the first render only
    }, [name]); // it's going to track the var value and if changed 

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
            <button onClick={ _ => setName('DO4') }>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;