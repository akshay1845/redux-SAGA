const Apidata = []
const API_Data = (state = Apidata , action) =>{
    switch(action.type){
        
        case "API_DATA" :
            console.log(action.payload, "inside reducer")
            return [...action.payload]

        default :
            return state;
    }
}

export default API_Data