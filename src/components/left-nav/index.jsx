import React, {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import menuList from '../../config/menuConfig'


const { SubMenu } = Menu;



export default class LeftNav extends Component {

	constructor (props) {
		super(props);
		this.state={
		collapsed: false
		}
	}

	toggleCollapsed = () => {
	this.setState({
		collapsed: !this.state.collapsed
	})
	}

	getMenuListItem = (menuList) =>{
		return menuList.map(item => {
			if(!item.children){
			return (
			<Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
            {item.title}
            </Link>
            </Menu.Item>)
			
			}else{
			return (
			<SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuListItem(item.children)}
          	</SubMenu>

			)
			}
		})
	}

	render(){
		return (
	<div>	
		<div className='left-nav'>
			<Link to='/' className='left-nav-header'>
			<img src={logo} alt='logo' />
			<h1>硅谷后台</h1>
			</Link>
		</div>
		<div style={{ width: 200 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['/home']}
          defaultOpenKeys={['/products','/graphs']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {
          	this.getMenuListItem(menuList)
          }
          
          
          
          
          

          
           
          
        </Menu>
      </div>
	</div>	
		)
	}
}