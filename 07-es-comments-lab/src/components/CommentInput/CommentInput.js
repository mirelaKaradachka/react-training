import React from 'react';
// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Comment } from '../../model/comment.model';


function CommentInput({ comment = new Comment('', ''), onSubmitComment }) {
    const [values, setValues] = useState(comment);
    function updateValue(event) {
        setValues({ ...values, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
    }

    function handleReset(event) {
        event.preventDefault();
        setValues(comment);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitComment(values);
    }
    return (
        <>
            <h2> {comment.id ? 'Edit comment' : 'Add new comment'}</h2>
            <form className="container" onSubmit={handleSubmit} onReset={handleReset}>
                <input type="text" id="text" name="text" value={values.text} onChange={updateValue} placeholder="Text" ></input>
                <input type="text" id="author" name="author" value={values.author} onChange={updateValue} placeholder="Author" ></input>
                <button className="button button5" type="submit" >{comment.id ? 'Edit comment' : 'Add new comment'}</button>
                <button className="button button3" type="reset" >Reset</button>
            </form>
        </>
    )
}

CommentInput.propTypes = {

}

CommentInput.defaultProps = {
    // comment: new Comment('a', 'b')
}

export default CommentInput;

