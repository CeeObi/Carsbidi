import { create } from "zustand"

type State = {
    pageNumber:number,
    pageCount:number,
    pageSize:number,
    searchTerm:string
}

type Actions = {
    setParams:(params: Partial<State>) => void,
    reset:() => void,
}

const initialState = {
    pageSize: 12,
    pageCount: 1,
    pageNumber: 1,
    searchTerm:""    
}

const useParamsStore = create<State & Actions>()((set) => ({
    ...initialState,
    setParams: (newParams : Partial<State>)=>{
        console.log("YYYYYYYYYYYYYYYYYYYYEEEEE")        
        set((state) => {
            if (newParams.pageNumber){
                return {...state, pageNumber: newParams.pageNumber}
            }else
            {
                return {...state,...newParams, pageNumber:1}
            }
        });
    },

    reset: () => set(initialState)
}))


export {useParamsStore};