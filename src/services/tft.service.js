import { functions } from "../lib/appwrite"; 

export const linkRiotAccount = async (riotId, token) => {
    try {
        const result = await functions.createExecution(
            import.meta.env.VITE_APPWRITE_FUNCTION_ID,
            JSON.stringify({
                action: 'link_tft',
                token,
                input: riotId
            }),
            false
        );

        if (!result.responseBody) {
            return { success: false, message: "Server không phản hồi" };
        }

        return JSON.parse(result.responseBody);

    } catch (error) {
        console.error("TFT Service Error:", error);
        return { success: false, message: "Lỗi kết nối Appwrite" };
    }
};