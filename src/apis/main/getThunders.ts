import {axiosInstance} from "../index";

const getThunders = async () => {
    try {
        const response = await axiosInstance.get(`/api/meeting`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getThunders;