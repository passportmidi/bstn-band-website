const BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
const API_KEY = "2b3555a3-61a2-4f07-ba9c-8b0731428662";

export default async function getItems(type) {
  try {
    console.log(`${BASE_URL}/${type}?api_key=${API_KEY}`);
    const resp = await axios.get(`${BASE_URL}/${type}?api_key=${API_KEY}`);
    const items = resp.data;
    const sortedItems = items.sort((a, b) => {
      if (type === "comments") {
        return b.timestamp - a.timestamp;
      } else if (type === "showdates") {
        return a.date - b.date;
      }
    });
    return sortedItems;
  } catch (e) {
    console.log(e);
  }
}

export async function postComment(comment) {
  try {
    const resp = await axios.post(
      `${BASE_URL}/comments?api_key=${API_KEY}`,
      comment
    );
    return resp;
  } catch (e) {
    console.log(e);
  }
}

export function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date);
  return formattedDate;
}
