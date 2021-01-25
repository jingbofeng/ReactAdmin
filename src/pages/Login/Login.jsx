import React, {Component} from 'react';
import './Login.less'
import logo from '../../assets/images/logo.png'
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin, reqAddUser} from '../../api'
import memoryUtils from '../../utils/memoryUtils.js'

class Login extends Component {


	onFinish = (values) => {
			const {username, password} = values;
      


			reqLogin(username, password).then(response => {
        console.log('成功了', response.data);
        const user = response.data;
        message.success('登陆成功');
        this.props.history.replace('/')
       
      }).catch((err)=>{
        console.eror(err);
      })

      
      
      
      

      
		}


	

	validatePwd = (rule, value, callback) => {
		if(!value) {
			callback('Please input your Password!')

		}else if(value.length<4){
			callback('Please input at least 4')
		}else if(value.length>12){
			callback('Please input at most 12')
		}else if(!/^[a-zA-Z0-9_]+$/.test(value)){
			callback('Username must be number')
		}else {
			callback()
		}


	}
		

	render(){



		
		

		return (
		    
		    <div className='login'>
		    	<header className='login-header'>
						<img src={logo} alt='logo'/>		    	
						<h1>React项目:后台管理系统</h1>
		    	</header>

		    	<section className='login-content'>
		    			<h2>用户登陆</h2>
		    			
	<Form
      name="normal_login"
      className="login-form"
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true, whitespace: true, message: 'Please input your Username!'
          },
          {
            min: 4, message: 'Please input at least 4'
          },
          {
            max: 12, message: 'Please input most 12'
          },
          {
            pattern: /^[a-zA-Z0-9_]+$/, message: 'Username must be number',
          },
        ]}
      >
       
        
        <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}} className="site-form-item-icon" />} placeholder="Username" />
        
        
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            validator: this.validatePwd
          }
        ]}
      >

      	
        <Input
          prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}} className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        
        
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>

		    	</section>
		    </div>

		    )
	}
}



export default Login
