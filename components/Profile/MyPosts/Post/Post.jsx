import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {

    
    let likeChange = () => {
        props.likeChange(props.id);
    }

    return <div className={classes.item}>
        <div><img alt="cat" src='https://habrastorage.org/files/861/240/a8a/861240a8a14047eea780a44e4c7debb1.jpg' /></div>
        <div>
            <div>{props.message}</div>
            <div><span className={classes.like}>Likes: {props.likeCount}<button onClick={likeChange}>Like</button></span></div>
        </div>
    </div>


}

export default Post;