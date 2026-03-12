import { createContext, useContext } from "react";
import { useTelegramAuth } from "../hooks/useTelegram";

const UserContext = createContext(null);

export function UserProvider({ children }) {

    const auth = useTelegramAuth();

    return (
        <UserContext.Provider value={auth}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}