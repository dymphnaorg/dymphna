import { BASE_URL } from "./baseURL";
import { commonApi } from "./CommonApi";


export const sendContactMessageApi = async (reqBody) => {
    console.log( "reqbody:::::",reqBody);
    return await commonApi("post", `${BASE_URL}/dymphna/contact_us`, reqBody, "")
}
