import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

const editComment = (id, text) => {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
};

const removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
};

const thumbUpComment = id => {
    return {
        type: THUMB_UP_COMMMENT,
        id
    }
};

const thumbDownComment = id => {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
};