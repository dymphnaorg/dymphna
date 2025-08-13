import { BASE_URL } from "./baseURL";
import { commonApi } from "./CommonApi";


export const sendContactMessageApi = async (reqBody) => {
    return await commonApi("post", `${BASE_URL}/contact_us`, reqBody, "")
}
