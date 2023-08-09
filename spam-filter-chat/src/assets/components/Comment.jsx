import React, { forwardRef } from 'react';

import './Comment.css';

const Comment = forwardRef(( props, ref) => {
    return(
        <div className = 'Comment' ref = { ref }>{ props.comment }</div>
    )
});

export default Comment;