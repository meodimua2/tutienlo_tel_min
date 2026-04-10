import { useEffect, useState, useCallback, useRef } from "react";
import { loginTelegram } from "../services/auth.service";

export function useTeleAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const called = useRef(false);

    const authenticate = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await loginTelegram();

            if (res?.success) {
                const normalizedUser = res.user ?? {
                    $id: res.telegramId,
                    telegramId: res.telegramId,
                    status: res.status,
                    balanceTrx: res.balanceTrx ?? 0,
                    token: res.token,
                    displayName: `User ${res.telegramId ?? ""}`,
                    onboarded: true
                };
                setUser(normalizedUser);
            } else {
                setError(res?.message || "Xác thực thất bại");
            }
        } catch {
            setError("Không thể kết nối tới máy chủ.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (called.current) return;
        called.current = true;

        authenticate();
    }, [authenticate]);

    return {
        user,
        loading,
        error,
        retry: authenticate
    };
}