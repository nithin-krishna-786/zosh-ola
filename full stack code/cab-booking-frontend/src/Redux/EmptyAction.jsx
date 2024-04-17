export const makeEmpty=(type)=>(dispatch)=>{
    dispatch({type:type,payload:null})
}