import React, { useState, useRef, useEffect } from 'react';
import Comment from './Comment';

import './Chat.css';

export default function Chat() {
    const ref = useRef();

    const [ commentText, setCommentText ] = useState('');
    const [ commentsArr, setCommentsArr ] = useState([]);

    const handleInputText = (e) => {
        setCommentText( e.target.value.replace(/viagra|xxx/ig, "***") );
    }

    const addComment = () => {
        setCommentsArr( prevState => [ commentText, ...prevState ]);
        setCommentText( '' );
    }
    useEffect(() => {
        if( ref.current !== undefined ){
            ref.current.classList.add( 'new' );
        }
    }, [ commentsArr ])

    return(
        <div className = 'wrapper'>
            <form className = 'form' action = "#" onSubmit = { e => e.preventDefault }>
                <textarea cols = '30' rows = '5' onChange = { handleInputText } value = { commentText }></textarea>
                <button onClick = { addComment } >Добавить комментарий</button>
            </form>
            {commentsArr.map(( comment, index ) => {
                if (commentsArr.length > 0) {
                    return <Comment key = { index } comment = { comment } ref = { index === 0 ? ref : null }></Comment>}
                else return null
            })}
        </div>
    )
}