const reducer = (state : any, action :any) : any=>{
    switch(action.type){
        case 'FILE_SELECTED':
            console.log(action.payload)
            return {
            state, file: action.payload
            }
    }
}

export default reducer