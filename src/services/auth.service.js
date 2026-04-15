// Chịu trách nhiệm gọi tới Appwrite Function và nhận về toàn bộ gói dữ liệu (Token, User, isLinked).
import { functions } from "../lib/appwrite";
import { getInitData } from "../lib/telegram";

export async function loginTelegram() {
    const initData = getInitData();

    if (!initData) {
        return { success: false, message: "Không tìm thấy dữ liệu Telegram" };
    }

    try {
        const result = await functions.createExecution(
            import.meta.env.VITE_APPWRITE_FUNCTION_ID,
            JSON.stringify({ 
                action: 'auth', 
                initData 
            }),
            false
        );

        if (!result.responseBody) {
            return { success: false, message: "Server không phản hồi" };
        }

        return JSON.parse(result.responseBody);
    } catch (error) {
        console.error("Login Error:", error);
        return { success: false, message: "Lỗi kết nối Appwrite" };
    }
}