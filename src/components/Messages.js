import React, { useEffect, useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "./UserContext";
import MessageCard from "./MessageCard";

const Messages = () => {
  const {user} = useContext(UserContext);
  const [messages, setMessages] = useState(null);

      // initial render
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:4000/api/v1/messages/recipient/${user._id}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.log(err));
    }
    if (user){
      fetchData();
    }
    
  }, [user]);

  if (messages !== null){
    console.log(messages);
  }

    return (<div className="Messages" style={{marginTop: "100px"}}> 
    { (user !== null) ? 
      (messages !== null) ? <div className="Messages-container"> 
      <Link to="/sent-messages">View your sent messages</Link>
    {
        messages.map(message => <MessageCard authorName={message.author.name} 
            subject={message.subject} key={message._id} 
            createdAt={message.createdAt}
            body={message.body} 
            recipient={message.recipient.name}
            category={message.recipient._id===user._id ? "recipient" : "author"}
            messageId={message._id}
            />)
    }
    </div> : <div>You don't have any messages  </div>
  : <Redirect to="/" /> 
    }
    
    
    </div>)
}

export default Messages;