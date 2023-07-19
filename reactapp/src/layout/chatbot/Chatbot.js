import React, { useState } from "react";
import './Chatbot.css';
import Messages from "./Messages";
import { useDispatch } from "react-redux";
import * as chatbotActions from "store/actions/chatbotActions";

const Chatbot = () => {
    const [query, setQuery] = useState("")

    const dispatch = useDispatch()
    const handleUserQuery = async() =>{
        if(query === ""){
            alert("please enter your query")
            return
        }
        const data = {
            text: query
        }
        dispatch(chatbotActions.textQueryAction(data))
        setQuery("")
    }

    return(
    <div className="botpos">
        <div className="chatbot__header">
            <h5 className="chatbot__header--text">KSRTC B0T</h5>
            <button className="chatbot__header--btn">&#10060;</button>
        </div>
        <div className="chatbot__body">
            <Messages />
        </div>
        <div className="chatbot__footer">
            <input className="chatbot__footer--input" type="text" value={query} placeholder="Type here..." onChange={(e)=> setQuery(e.target.value)} />
            <button className="chatbot__footer--btn" onClick={()=> handleUserQuery()}>send</button>
        </div>
    </div>
    )
}

export default Chatbot