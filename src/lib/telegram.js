export const getTelegram = () => {
    if (typeof window === "undefined") return null;

    const tg = window.Telegram?.WebApp;
    if (!tg) return null;

    return tg;
};

export const getInitData = () => {
    const tg = getTelegram();
    if (!tg) return null;

    const initData = tg.initData;

    if (!initData || initData.length === 0) {
        return null;
    }

    return initData;
};