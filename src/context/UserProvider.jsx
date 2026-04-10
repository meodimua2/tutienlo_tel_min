import { UserContext } from "./user-context";
import { useTeleAuth } from "../hooks/useAuth";

export function UserProvider({ children }) {

    const auth = useTeleAuth();

    return (
        <UserContext.Provider value={auth}>
            {children}
        </UserContext.Provider>
    );
}
