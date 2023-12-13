import axios from "@/utils/Requset";
const token = sessionStorage.getItem('token')
export const GetUser = () => {
	return axios.request({
		url: `users/getMyId?id=&token=${token}`,
		method: 'POST',
	})
}