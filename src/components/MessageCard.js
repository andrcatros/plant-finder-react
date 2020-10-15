import React from "react";
import { Link } from "react-router-dom";

import MessageDetail from "./MessageDetail";

import "../styles/MessageCard.css"

const MessageCard = ({subject, body, createdAt, recipient, authorName, category }) => {
    const sent = new Date(createdAt).toLocaleDateString('en-gb', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})

    return (<div className={`MessageCard-${category}`}>
      <Link to="/messages/detail" >
    <b>From</b> {authorName} {"         "}
    <b>To:</b> {recipient}
    <br />
    <b>Subject:</b> {subject} {"          "}
    <b>Sent:</b> {sent}
  {/*  message: {body} */}</Link>
    </div>)
}

export default MessageCard;