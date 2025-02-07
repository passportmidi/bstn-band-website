const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
const API_KEY = "ab03a4d8-9b51-4b20-b105-74acaa935546";

export default async function getComments() {
    try {
        const resp = await axios.get(`${BASE_URL}/comments?api_key=${API_KEY}`);
        const comments = resp.data;
        console.log(comments);
    }
    catch (e) {
        console.log(e);
    }
}