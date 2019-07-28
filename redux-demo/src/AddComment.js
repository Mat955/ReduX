import { connect } from 'react-redux';
import { addComment } from './actions';
import newCommentButton from './addCommentButton';

const mapDispatchToProps = dispatch => ({
    addComment: text => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(newCommentButton)