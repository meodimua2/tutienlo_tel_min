import { useContext } from "react";
import { UserContext } from "../context/user-context";

export function useUser() {
    const ctx = useContext(UserContext);
    if (ctx == null) {
        throw new Error("useUser must be used within UserProvider");
    }
    return ctx;
}
