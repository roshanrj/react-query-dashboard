import axios from "axios";

/* Note: If this API https://randomuser.me/api/ have supported query params which is not supporting now, then the below function will be
export const fetchRandomUsers = (name) => axios.get(`https://randomuser.me/api/?name=${name}&results=50`);
*/

export const fetchRandomUsers = () => axios.get(`https://randomuser.me/api/?results=50`);

// Note: It provides a random result every time it is called. So, te clicked item wont match with the user detail view.
export const fetchUserDetails = async (uuid: string | number) => {
    const response = await axios.get(`https://randomuser.me/api/?uuid=${uuid}`);
    return response.data.results.at(0);
};

export const fetchUsersByParams = async ({ pageParam = 1 }) => {
    const response = await axios.get(`https://randomuser.me/api/?page=${pageParam}&results=10`);
    return {
      results: response.data.results,
      nextPage: pageParam + 1,
      totalPages: 10 // The API doesn't provide total pages, so set a static number for demonstration
    };
};