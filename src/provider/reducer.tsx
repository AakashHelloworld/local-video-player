const reducer = (state : any, action :any) : any=>{
    switch(action.type){
        case 'FILE_SELECTED':
            console.log(action.payload)
            console.log(action.payload.files)

            console.log(action?.payload?.subTitles)

            console.log(action?.payload?.videosList)

            console.log(action?.payload?.directory)

            return {
            state, file: action?.payload?.files, subtitle: action?.payload?.subTitles, videosList: action?.payload?.videosList
            ,directory: action?.payload?.directory    
        }
        case 'VIDEO_ENDED_COMPLETION':
            console.log(action.payload)
            return {
            ...state, videosList: action?.payload
            }
        case 'FILE_SELECTED_JSON':
            console.log(action.payload)
            console.log(action.payload.files)

            console.log(action?.payload?.subTitles)

            console.log(action?.payload?.directory)

            return {
            state, file: action?.payload?.files, subtitle: action?.payload?.subTitles, videosList: action?.payload?.videosList
            ,directory: action?.payload?.directory
        }
    }
}

export default reducer