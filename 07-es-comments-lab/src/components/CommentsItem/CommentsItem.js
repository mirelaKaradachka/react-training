import React from "react";
import PropTypes from "prop-types";
import "./CommentItem.css";
CommentsItem.propTypes = {};

function CommentsItem({ comment, isActive, onChangeSelected }) {
  return (
    <div className={isActive ? "CommentItem active" : "CommentItem"}>
      <div className="CommentItem-left">
        <span className="CommentItem-id">{dateStr}:</span>
        <span
          className="CommentItem-text"
          dangerouslySetInnerHTML={rawMarkup(comment.text)}
        />
      </div>
      <div className="CommentItem-right">
        [<span className="CommentItem-author">{comment.author}</span>]
        <span className="CommentItem-controls">
          <span
            className="CommentItem-button fas fa-edit"
            onClick={handleUpdate}
          ></span>
          <span
            className="CommentItem-button danger fas fa-trash-alt"
            onClick={handleDelete}
          ></span>
        </span>
      </div>
    </div>
  );
}

export default CommentsItem;
