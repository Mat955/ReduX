import React from 'react';

let counter = 2;

const newComment = () => {
    counter++;
    return counter + ' comment'
};

const addCommentButton = ({ addComment }) =>
    <div>
        <button className='addButton' onClick={() => addComment(newComment())}>Add Comment</button>
    </div>

export default addCommentButton;