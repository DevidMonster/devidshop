import axios from "axios";

const httpRequest = axios.create({
    proxy: "http://localhost:8000"
})
export const get = async (path, option = []) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};
