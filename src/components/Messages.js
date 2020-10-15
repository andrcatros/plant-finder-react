import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

import MessageCard from "./MessageCard";

const Messages = ({isLoggedIn, userID, name}) => {
    const [messages, setMessages] = useState([]);

      // initial render
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:4000/api/v1/messages/${userID}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, [userID]);

  console.log(messages);


    return (<div className="Messages" style={{marginTop: "100px"}}> 
    { isLoggedIn ? <div className="Messages-container"> 
    {
        messages.map(message => <MessageCard authorName={message.author.name} 
            subject={message.subject} key={message._id} 
            createdAt={message.createdAt}
            body={message.body} 
            recipient={message.recipient.name}
            category={message.recipient._id===userID ? "recipient" : "author"}
            />)
    }
    </div> 
    : <Redirect to="/" />
    }
    
    
    </div>)
}

// isLoggedIn={isLoggedIn} userID={userID} name={userName}

export default Messages;