import {axiosInstance} from "../index";

const getFeeds = async (category: string) => {
    try {
        const response = await axiosInstance.get(`/api/post/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getFeeds;