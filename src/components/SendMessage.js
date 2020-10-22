import React, { useContext, useState } from "react";
import { Redirect} from "react-router-dom";
import axios from "axios";

import { UserContext } from "./UserContext";
import Alert from "./Alert";

const SendMessage = ({recipient, previousSubject}) => {
    const {user} = useContext(UserContext);
    const initialState = {subject: `Re:${previousSubject}`, body: "", author: user._id, recipient: recipient}

    const [message, setMessage] = useState(initialState);
    const [alert, setAlert] = useState({message: null, success: false})

    const handleChange = (e) => {
        setMessage({...message, [e.target.name]:e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
    const postData = async () => {
      await axios
        .post(
          "http://localhost:4000/api/v1/messages",
          message
        )
        .then((res) => {
          if (res.status === 201) {
            setAlert({ message: "success!", success: true });
          } else {
            setAlert({ message: "failed to send message", success: false });
          }
        })
        .catch((err) => {
          setAlert({ message: "failed to send message", success: false });
        });
    };

    const validate = () => {
      if (message.body === null || message.body.trim() === "") {
        setAlert({ message: "please enter a message" });
      } else {
          return true;
        }
      };

    if (validate){
          postData()
    }
    };

    return <div className="SendMessage" style={{borderStyle: "solid"}}>
                {user ? <div className="SendMessage-container">           
                <form onSubmit={handleSubmit}>
                    <label>
                        Subject:
                        <input 
                        id="subject"
                        name="subject"
                        value={message.subject}
                        onChange={handleChange}
                        />
                    </label>
            <label>
              Add your message below <br />
              <textarea
                id="body"
                name="body"
                value={message.body}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit" className="send-message-button">
              Send
            </button>
          </form> 
          {alert.message && <Alert {...alert} />}
          </div> : <Redirect to="/" />}
    
    
    
    </div>
}

export default SendMessage;