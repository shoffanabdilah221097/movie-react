import axios from "axios";

export const apiTmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept:"application/json"
    },
    params: {
        api_key: "fc5d6a373e7f69d2dc683b3469645985",
    },
})