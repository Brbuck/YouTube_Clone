import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = (props) => {
    const [click, setClick] = useState(false);

    return (
        <AuthContext.Provider value={{click, setClick}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext)
    const {click, setClick} = context;
    return {click, setClick}
}