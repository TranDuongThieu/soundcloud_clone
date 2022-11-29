import axios from 'axios';
const httpRequest = axios.create({
    baseUrl: 'mongodb://127.0.0.1:27017/f8_education_dev',
});

export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    console.log(response);
    return response;
};
export default httpRequest;
