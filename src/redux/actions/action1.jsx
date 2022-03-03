export const callApi = () => ({
    //using redux-thunk
    // return async (dispatch) => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    //     const data = await res.json();
    //     dispatch({type:"FETCH_API_DATA", payload : data});
    // }

    //using redux saga
        type:"FETCH_API_DATA"  
 
})

export const  setApi = (data) => {
    return {
        type:"API_DATA",
        payload: data
    } 
}