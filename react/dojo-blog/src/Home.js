import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'DR4', id: 1 }, 
        { title: 'Hello Programming', body: 'lorem ipsum...', author: 'DO4', id: 2 }, 
        { title: 'Front-End Web Development', body: 'lorem ipsum...', author: 'Moustafa', id: 3 }, 
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!'/> {/* using seperate files is better */}
            <BlogList blogs={blogs.filter(blog => blog.author === 'Moustafa')} title="Moustafa's Blog!"/> {/* using seperate files is better */}
        </div>
    );
}

export default Home;