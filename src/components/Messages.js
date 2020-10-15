import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { UserContext } from "./UserContext";
import MessageCard from "./MessageCard";

const Messages = () => {
  const {user} = useContext(UserContext);
  const [messages, setMessages] = useState([]);

      // initial render
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:4000/api/v1/messages/${user._id}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.log(err));
    }
    if (user){
      fetchData();
    }
    
  }, [user]);


    return (<div className="Messages" style={{marginTop: "100px"}}> 
    { (user !== null) ? <div className="Messages-container"> 
    {
        messages.map(message => <MessageCard authorName={message.author.name} 
            subject={message.subject} key={message._id} 
            createdAt={message.createdAt}
            body={message.body} 
            recipient={message.recipient.name}
            category={message.recipient._id===user._id ? "recipient" : "author"}
            />)
    }
    </div> 
    : <Redirect to="/" />
    }
    
    
    </div>)
}

export default Messages;