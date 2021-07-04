import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { keyId } = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${keyId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [keyId])
    return (
        <div style={{border: '1px solid gray', margin: '20px 20px', backgroundColor: '#F6F6F6'}}>
            <h3>This is post details {keyId}</h3>
            <p>User posted: {post.id}</p>
            <p><strong>{post.title}</strong></p>
            <p style={{color:"gray"}}>{post.body}</p>
        </div>
    );
};

export default PostDetails;