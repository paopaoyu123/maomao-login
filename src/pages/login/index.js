import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import './login.css'

export default class login extends Component {
	constructor(props) {
		super(props)
	}
	getData(values) { //请求数据函数
		console.log(JSON.stringify(values))
		fetch(`http://192.168.0.107:8080/v1/user/login`, {
			method: 'post',
			mode: 'cors',
			/* headers: {
				'Content-Type': 'application/json'
			}, */
			body: JSON.stringify(values)
		}).then(res => {
			console.log(111,res)
			return res.json();
		}).then(json => {
			console.log('获取的结果', json.data);
			return json;
		}).catch(err => {
			console.log('请求错误', err);
		})
	}

	onFinish = values => {
		this.getData(values);
		/* console.log('Success:', values); */
	};
	render() {
		return (
			<div className="main">
				<div className="container">
					<div className="title">文件存储系统</div>
					<Form
						name="basic"
						initialValues={{ remember: true }}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
						<Form.Item
							label="用户名"
							name="username"
							rules={[{ message: 'Please input your username!' }]}
						>
							<Input size="large" placeholder="请输入用户名" />
						</Form.Item>
						<Form.Item
							label="密码"
							name="password"
							rules={[{ message: 'Please input your password!' }]}
						>
							<Input.Password size="large" placeholder="请输入密码" />
						</Form.Item>
						<Form.Item >
							<Button type="primary" htmlType="submit" size='large'>
								登录
        				</Button>
						</Form.Item>
					</Form>
				</div>
			</div >
		)
	}
}
