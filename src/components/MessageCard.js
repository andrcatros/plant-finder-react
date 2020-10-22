import React from "react";
import { Link } from "react-router-dom";

import "../styles/MessageCard.css"

const MessageCard = ({subject, createdAt, recipient, authorName, category, messageId }) => {
    const sent = new Date(createdAt).toLocaleDateString('en-gb', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})

    return (<div className={`MessageCard`}>
      <Link to={`/messages/detail/${messageId}`} >
    <b>From</b> {authorName} {"         "}
    <b>To:</b> {recipient}
    <br />
    <b>Subject:</b> {subject} {"          "}
    <b>Sent:</b> {sent}
    </Link>
    </div>)
}

export default MessageCard;