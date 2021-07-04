import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showDetails = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>id:{id} <strong>{title}</strong></h2>
            <p>{body}</p>
            <button onClick={()=> showDetails(id)}>Details</button>
        </div>
    );
};

export default Post;