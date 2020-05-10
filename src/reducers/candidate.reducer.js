
const candidateReducer =(state={},action)=>{    
    switch (action.type) {
       case 'GET_CANDIDATES': 
       return{
           ...state,
           payload: action.payload
           
      }
      case 'VOTING_SUCCESS': 
      return{
          ...state,
          message: action.payload
          
     }
        default: return state
            

    }
}
export default  candidateReducer;