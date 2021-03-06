import React, { useEffect, useContext, useState } from "react";
import { useParams, Redirect} from "react-router-dom";
import axios from "axios";

import SendMessage from "./SendMessage";
import { UserContext } from "./UserContext";

const MessageDetail = () => {
    const messageID = useParams()
    const {user} = useContext(UserContext);
    const [message, setMessage] = useState(null);
    let sent


    useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:4000/api/v1/messages/${messageID.id}`)
        .then((res) => setMessage(res.data))
        .catch((err) => console.log(err));
    }
    if (user){
      fetchData();
    }
  }, [messageID, user]);



  if (message !== null){
    sent = new Date(message.createdAt).toLocaleDateString('en-gb', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'})

  }


    return <div className="MessageDetail" style={{margin: "100px"}}>
        {user ? (message === null) ? <p>Loading data...</p> : <div className="MessageDetail-message">
            <div className="MessageDetail-message-header"> From: {message.recipient.name} {"  "}
            Sent: {sent} {" "}
            Subject: {message.subject} {" "} </div>
            <div className="MessageDetail-message-body"> {message.body} </div>
            <SendMessage recipient={message.author._id} previousSubject={message.subject} />
            </div> : <Redirect to="/" />}
    </div>
}

export default MessageDetail;