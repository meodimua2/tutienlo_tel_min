import { UserContext } from "./user-context";
import { useTeleAuth } from "../hooks/useAuth";
import useTelegram from "../hooks/useTelegram";

export function UserProvider({ children }) {

    const auth = useTeleAuth();
    const tg = useTelegram(); // Setup Telegram WebApp

    return (
        <UserContext.Provider value={auth}>
            {children}
        </UserContext.Provider>
    );
}
