import axios from "axios";

export const UseApi = (props) => {
	const BaseApiUrl = "https://ecommerce-api.udemig.dev/api/v2/";

	axios.defaults.baseURL = BaseApiUrl;

	const token = localStorage.getItem("token");

	axios.defaults.headers.common["accept"] = "application/json";
	axios.defaults.headers.common["Accept-Language"] = "en_US";
	axios.defaults.headers.common["Content-Type"] = "application/json";

	if (token) {
		console.log("TOKEN MEVCUT", token);

		axios.defaults.headers.common["Authorization"] = token;
	}
	return axios;
};

export default UseApi;
