import React, { useReducer, useContext, useEffect } from 'react';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(initialState)

return <AppContext.Provider value={{ ...state }}>
    {children}
</AppContext.Provider>

}

const useAppContext = () => {
    return useContext(AppContext);
}
export { AppProvider, initialState, useAppContext };