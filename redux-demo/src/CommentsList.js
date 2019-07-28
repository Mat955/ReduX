import React from 'react';
import Comment from './CommentContainer';
import AddComment from './AddComment';

const CommentsList = ({ comments }) =>
    <div>
        <AddComment />
        <ul>
            {comments.map(comment => <Comment key={comment.id}{...comment} />)}
        </ul>
    </div>

export default CommentsList;