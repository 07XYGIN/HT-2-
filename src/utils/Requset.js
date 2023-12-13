import axios from "axios";

const instance = axios.create({
	baseURL: 'http://community.byesame.com',
	headers: { 'X-Custom-Header': 'foobar' }
});
instance.interceptors.request.use((config) => {
	if (config.url !== '/login') {
		config.headers.Authorization = localStorage.getItem('token')
	}
	return config
}, error => {

	return Promise.reject(error);
});
instance.interceptors.response.use(response => {

	return response.data;
}, error => {

	return Promise.reject(error);
});


export default instance