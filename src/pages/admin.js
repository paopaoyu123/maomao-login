import React from 'react'
import './admin.less'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export default class Admin extends React.Component{
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      render() {
        return (
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo">云滴后台管理系统</div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <UserOutlined />
                  <span>工作台</span>
                </Menu.Item>
                <SubMenu
									key="sub1"
									title={
											<span>
											<UserOutlined />
											<span>基础信息</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub2"
									title={
											<span>
											<UserOutlined />
											<span>城际业务管理</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub3"
									title={
											<span>
											<UserOutlined />
											<span>营销策略系统</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub4"
									title={
											<span>
											<UserOutlined />
											<span>实时监控</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub5"
									title={
											<span>
											<UserOutlined />
											<span>代理商系统</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub6"
									title={
											<span>
											<UserOutlined />
											<span>财务管理</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
								<SubMenu
									key="sub7"
									title={
											<span>
											<UserOutlined />
											<span>客服系统</span>
											</span>
									}
									>
									<Menu.Item key="2">系统管理员</Menu.Item>
									<Menu.Item key="3">供应商信息</Menu.Item>
									<Menu.Item key="4">司机信息</Menu.Item>
									<Menu.Item key="4">司机数据</Menu.Item>
									<Menu.Item key="4">企业客户信息</Menu.Item>
									<Menu.Item key="4">用户信息</Menu.Item>
									<Menu.Item key="4">操作日志</Menu.Item>
								</SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        );
      }
}