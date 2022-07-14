import { createContext, ReactNode, useContext, useState } from "react";

type AuthProviderProps = {
    children: ReactNode;
}

type AuthContext = {
    isLoggedIn: boolean;
    logIn: (username: string, password: string) => boolean;
    logOut: () => void;
}

const AuthContext = createContext({} as AuthContext);

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = (username: string, password: string) => {
        if (/^[a-zA-Z0-9]{4,}$/.test(username) && /^[a-zA-Z0-9]{6,}$/.test(password) && username !== password) { // Validate
            setIsLoggedIn(true);
            console.log("User logged in with: ", username, password);
            return true;
        }
        return false;
    }

    const logOut = () => {
        setIsLoggedIn(false);
        console.log("logout");
        console.log(isLoggedIn);
    }
    
    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            logIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;