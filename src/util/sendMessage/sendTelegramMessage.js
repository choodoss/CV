const CHATID = '647059589';
const BOTTOKEN = '6346364739:AAFQaBxY1amP0-SEVVM_SHfAhvDT55mmB8M';

export const sendMessageToTelegram = async (text) => {
    const apiUrl = `https://api.telegram.org/bot${BOTTOKEN}/sendMessage`;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHATID,
            text: text,
        }),
    };
    console.log(apiUrl)

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        console.log("Response from Telegram API:", data);
    } catch (error) {
        console.error("Error when sending a message in Telegram:", error);
    }
};

