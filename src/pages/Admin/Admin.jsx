import React, {Component} from 'react';
import memoryUtils from '../../utils/memoryUtils.js'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../Home/Home'
import Category from '../Category/Category'
import Product from '../Product/Product'
import Role from '../Role/Role'
import User from '../User/User'
import Bar from '../Charts/Bar'
import Line from '../Charts/Line'
import Pie from '../Charts/Pie'


const {Footer, Sider, Content} = Layout

export default class Admin extends Component {

	
	render(){

	return(
    <Layout style={{height:'100%'}}>
      <Sider><LeftNav /></Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{background: '#fff'}}>
            <Route path='/home' component={Home} />
            <Route path='/category' component={Category} />
            <Route path='/product' component={Product} />
            <Route path='/role' component={Role} />
            <Route path='/user' component={User} />
            <Route path='/charts/bar' component={Bar} />
            <Route path='/charts/line' component={Line} />
            <Route path='/charts/pie' component={Pie} />
            <Redirect to='/home' />
        </Content>
        <Footer style={{textAlign: 'center'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>

    )
	}
}