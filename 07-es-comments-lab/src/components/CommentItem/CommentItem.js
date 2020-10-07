import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../model/comment.model';
import './CommentItem.css';
import { Marked } from '@ts-stack/markdown';

function rawMarkup(markdownText) {
    return { __html: Marked.parse(markdownText) }
}

function CommentItem({ comment, isActive, onChangeSelected, onEditComment, onDeleteComment }) {
    function handleUpdate() {
        onEditComment(comment);

    }
    function handleDelete() {
        onDeleteComment(comment);
    }

    const date = new Date(comment.id);
    const dateStr = ('00' + date.getDate()).slice(-2) + '.' + ('00' + (date.getMonth() + 1)).slice(-2) + '.'
        + date.getFullYear() + ' ' + ('00' + date.getHours()).slice(-2) + ':'
        + ('00' + date.getMinutes()).slice(-2);

    const dateStr2 = new Intl.DateTimeFormat('bg-BG').format(date);

    return (
        <div className={isActive ? 'CommentItem active' : 'CommentItem'}>
            <div className="CommentItem-left">
                <span className="CommentItem-id">{Date.parse(comment.id)}</span>
                <span className="CommentItem-text" dangerouslySetInnerHTML={rawMarkup(comment.text)}></span>
            </div>
            <div className="CommentItem-right">
                <span className="CommentItem-author">{comment.author}</span>
                <span className="CommentItem-controls">
                    <span className="CommentItem-button fas fa-edit" onClick={handleUpdate}></span>
                    <span className="CommentItem-button fas fa-trash-alt" onClick={handleDelete}></span>
                </span>
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    comment: CommentType.isRequired,
    isActive: PropTypes.bool,
    onChangeSelected: PropTypes.func
}

CommentItem.defaultProps = {
    isActive: false
}

export default CommentItem

