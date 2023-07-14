import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";
import reducer from './reducer'


const StateContext = createContext();

const StateProvider = ({children}) => {
    const [state, dispatch ] = useReducer(reducer, initialState);

    return <StateContext.Provider value={{basket: state.basket, user: state.user, dispatch: dispatch}}>
      {children}
    </StateContext.Provider>
};

export default StateProvider;
export const UserAuth = () => {
    return useContext(StateContext);
}


// // Prepares the dataLayer
// export const StateContext = createContext();

// // Wrap our app and provide the Data layer
// export const StateProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState,)
//     return 
//   <StateContext.Provider value={{reducer, initialState,}}>
//     {children}
//   </StateContext.Provider>
// }

// // Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);