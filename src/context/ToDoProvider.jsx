import { createContext, useReducer } from "react";


export const ToDoContext = createContext();
export const ToDoProvider = ({children}) => {
    let initialState = [];
    const reducer = (state, action) =>{
        switch(action.type){
            case "add":
                const isExit = state.find((items)=>{
                    return items.id == action.payload.id;
                })

                if(isExit)
                    return state;
                else{
                    const newToDo = [...state, action.payload];
                    return newToDo;
                }
            case "delete":
                const newData = state.filter((index)=>index.id !== action.payload)
                return newData;

            case "edit":
                const newEdit = state.map((items)=>items.id === action.payload.id ? {...items,title:action.payload.title} : items);
                return newEdit
                
            default:
                return state
                
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState);
    

    return (
        <ToDoContext.Provider value={{state, dispatch}}>
            {children}
        </ToDoContext.Provider>
    )

}