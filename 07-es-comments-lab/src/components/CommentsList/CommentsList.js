import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../../model/comment.model";
import CommentsItem from "../CommentsItem/CommentsItem";

const CommentsList = ({ comments, selected, ...rest }) => {
  return (
    <div className="CommentsList">
      {comments.map((comm) => (
        <CommentsItem
          key={comm.id}
          comment={comm}
          isActive={selected && selected.id === comm.id}
        />
      ))}
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(Comment),
  selected: PropTypes.instanceOf(Comment),
  onChangeSelected: PropTypes.func,
};

export default CommentsList;
