import {axiosInstance} from "../index";

const getMap = async () => {
    try {
        const response = await axiosInstance.get(`/api/user/map/id111`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getMap;