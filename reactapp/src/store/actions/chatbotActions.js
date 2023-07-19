//api calls
const axios = require("axios");
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const UPDATE_USER_MESSAGE = "UPDATE_USER_MESSAGE";

export const textQueryAction = (data) => {
    return async (dispatch, getState) => {
        dispatch({ type: UPDATE_USER_MESSAGE, data: data })
        const response = await axios.post("http://localhost:3030/text_query", {
                text: data.text,
                userId: "Azi-2102"
        })
        return dispatch({ type: UPDATE_MESSAGE, data: response.data })
    }
} 