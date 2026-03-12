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

        return JSON.parse(result.responseBody);

    } catch (err) {

        return {
            success: false,
            message: "Không gọi được Appwrite Function"
        };
    }
}