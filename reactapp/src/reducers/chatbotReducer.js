// action based state update
import { UPDATE_MESSAGE, UPDATE_USER_MESSAGE } from "store/actions/chatbotActions";
const initialState = {
    messages : [] 
}

const chatbotReducer = (state = initialState,action) => {
    switch(action.type){
        case UPDATE_MESSAGE:
            let message = {
                speak: "bot",
                text: action.data.fulfillmentText
            }
            return{
                ...state, messages : [...state.messages, message]
            };
        case UPDATE_USER_MESSAGE:
            let messageUser = {
                speak: "user",
                text: action.data.text
            }
            return {
                ...state, messages : [...state.messages, messageUser]
            };
        default:
            return state;
    }
}

export default chatbotReducer