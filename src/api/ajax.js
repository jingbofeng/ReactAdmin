import axios from 'axios';

export default function ajax(url, data={}, type='GET'){
	if(type==='GET'){
		return axios.get(url, {
			params: data
		})
	}else{
		return axios.post(url, data)
	}
	
}


ajax('/login', {username:'Tom', password:'12345'}, 'POST').then()

ajax('/manage/user/add', {username:'Tom', password:'12345', phone:'13712341234'}, 'POST').then()