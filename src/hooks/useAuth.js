import { useEffect, useState, useCallback, useRef } from "react";
import { loginTelegram } from "../services/auth.service";

export function useTeleAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const called = useRef(false);

    const authenticate = useCallback(async () => {
        setLoading(true);
        try {
            const res = await loginTelegram();

            if (res?.success) {
                if (res.token) {
                    localStorage.setItem('jwt_token', res.token);
                }
                setUser(res); 
            } else {
                setError(res?.message || "Xác thực thất bại");
            }
        } catch {
            setError("Lỗi hệ thống");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!called.current) {
            called.current = true;
            authenticate();
        }
    }, [authenticate]);

    return { user, loading, error, retry: authenticate };
}