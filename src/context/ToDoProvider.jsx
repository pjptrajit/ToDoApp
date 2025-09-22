import { createContext, useEffect, useReducer } from "react";


export const ToDoContext = createContext();
const doGet = ()=>{
   
        let data = localStorage.getItem("todo");
        return data ? JSON.parse(data) : [];
    
}
    let initialState = doGet();
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


export const ToDoProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(()=>{
        localStorage.setItem("todo", JSON.stringify(state));
    },[state]);

    return (
        <ToDoContext.Provider value={{state, dispatch}}>
            {children}
        </ToDoContext.Provider>
    )

}