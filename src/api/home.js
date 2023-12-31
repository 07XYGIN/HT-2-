import axios from "@/utils/Requset";
export const GetHouseUtil = (params) => {
	return axios.request({
		url: 'house/gethouseList',
		method: 'get',
		params,

	})
}
export const SearchHouseUtil = (params) => {
	return axios.request({
		url: 'house/searchList',
		method: 'get',
		params,

	})
}
export const PostHouseUtil = (data) => {
	return axios.request({
		url: 'house/addunitList',
		method: 'post',
		data,

	})
}
export const DelHouseUtil = (params) => {
	return axios.request({
		url: 'house/delunitList',
		method: 'get',
		params,

	})
}
export const ShowHouseUtil = (params) => {
	return axios.request({
		url: 'house/getDetailId',
		method: 'get',
		params,

	})
}
export const EditHouseUtil = (data) => {
	return axios.request({
		url: 'house/updateunitList',
		method: 'post',
		data,

	})
}
export const GetHouseNum = (params) => {
	return axios.request({
		url: 'house/searchnumList',
		method: 'get',
		params,

	})
}
export const DelHouses = (params) => {
	return axios.request({
		url: `house/delnumList?${params}`,
		method: 'get',

	})
}
export const UpdataHouses = (data) => {
	return axios.request({
		url: `house/updatenumList`,
		method: 'post',
		data
	})
}
export const GetUserList = (params) => {
	return axios.request({
		url: 'users/getUserList',
		method: 'get',
		params,

	})
}
export const SearchdeviceList = (params) => {
	return axios.request({
		url: 'house/searchdeviceList',
		method: 'get',
		params,

	})
}
export const ChangeSmart = (data) => {
	return axios.request({
		url: 'house/updatesmartStatus',
		method: 'post',
		data,
	})
}

