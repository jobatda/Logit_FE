import {axiosInstance} from "../index";

interface postMapProps {
    region: string;
    background: string;
}

const postMap = async (region: string, background: string) => {
    try {
        const response = await axiosInstance.patch(`/api/user/map/id111`, {
            region: region,
            background: background,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default postMap;