import React, { useEffect, useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "./UserContext";
import MessageCard from "./MessageCard";

const SentMessages = () => {
  const {user} = useContext(UserContext);
  const [messages, setMessages] = useState(null);

      // initial render
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:4000/api/v1/messages/author/${user._id}`)
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

    return (<div className="SentMessages" style={{marginTop: "100px"}}> 
    { (user !== null) ? 
      (messages !== null) ? <div className="SentMessages-container"> 
      <Link to="/messages">My received requests</Link>
    {
        messages.map(message => <MessageCard authorName={message.author.name} 
            subject={message.subject} key={message._id} 
            createdAt={message.createdAt}
            body={message.body} 
            recipient={message.recipient.name}
            messageId={message._id}
            />)
    }
    </div> : <div>You haven't sent any requests  </div>
  : <Redirect to="/" /> 
    }
    
    
    </div>)
}

export default SentMessages;