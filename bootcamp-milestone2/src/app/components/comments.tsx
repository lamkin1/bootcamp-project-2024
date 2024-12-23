import React from "react";
import style from "./comments.module.css";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){
	return new Date(time).toLocaleString();
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comment}>
            <h4 className={style.user}>{comment.user}</h4>
            <span className={style.time}>{parseCommentTime(comment.time)}</span>
            <p className={style['comment-text']}>{comment.comment}</p>
            
        </div>
    );
}

export default Comment;

