import React from 'react'

const Create = () => {
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
                <div className="title-field">
                    <label htmlFor="blog-title">Blog Title</label>
                    <input type="text" name="title" id="blog-title" />
                </div>
                <div className="body-field">
                    <label htmlFor="blog-body">Blog Body</label>
                    <textarea name="body" id="blog-body" cols="55" rows="10"></textarea>
                </div>
                <div className="author-field">
                    <label htmlFor="blog-author">Blog Author</label>
                    <select name="author" id="blog-author">
                        <option value="DR4">DR4</option>
                        <option value="DO4">DO4</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default Create;