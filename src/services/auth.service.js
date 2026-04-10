import { functions } from "../lib/appwrite";
import { getInitData } from "../lib/telegram";

export async function loginTelegram() {
    const initData = getInitData();

    if (!initData) {
        return { success: false, message: "Không có initData" };
    }

    try {
        const result = await functions.createExecution({
            functionId: import.meta.env.VITE_APPWRITE_FUNCTION_ID,
            body: JSON.stringify({ initData }),
            async: false
        });

        const raw = result.responseBody;
        if (raw == null || raw === "") {
            return { success: false, message: "Máy chủ không trả dữ liệu" };
        }

        try {
            return JSON.parse(raw);
        } catch {
            return { success: false, message: "Phản hồi máy chủ không hợp lệ" };
        }

    } catch {

        return {
            success: false,
            message: "Không gọi được Appwrite Function"
        };
    }
}