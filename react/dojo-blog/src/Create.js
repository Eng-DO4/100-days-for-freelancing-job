import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
    // storing inputed values in variables
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('DR4');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then( _ => { setIsPending(false); });
        // history.go(1); // goes fwd in history
        history.push('/'); // redirect to Home
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <div className="title-field">
                    <label htmlFor="blog-title">Blog Title</label>
                    <input type="text" name="title" id="blog-title" required value={title} 
                     onChange={ e => setTitle(e.target.value) } /> {/* this func updates the value */}
                </div>
                <div className="body-field">
                    <label htmlFor="blog-body">Blog Body</label>
                    <textarea name="body" id="blog-body" cols="55" rows="10" required value={body} 
                     onChange={ e => setBody(e.target.value) }></textarea>
                </div>
                <div className="author-field">
                    <label htmlFor="blog-author">Blog Author</label>
                    <select name="author" id="blog-author" value={author} required 
                     onChange={ e => setAuthor(e.target.value) }>
                        <option value="DR4">DR4</option>
                        <option value="DO4">DO4</option>
                    </select>
                </div>
                { !isPending && <button>Add</button> }
                { isPending && <button disabled>Add</button> } {/* disables the button till the blog added */}
            </form>
        </div>
    );
}

export default Create;