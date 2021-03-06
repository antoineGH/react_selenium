import React from 'react'
import { Form, Input, Button } from 'antd'

const onFinish = (values: any) => {
	console.log('Success', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed', errorInfo)
}

const LoginForm = () => {
	return (
		<>
			<Form
				name='basic'
				className='form-login'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<Form.Item
					label='Username'
					name='username'
					className='username'
					rules={[{ required: true, message: 'Please input your username!' }]}>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}>
					<Input.Password />
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button id='basic-submit' type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default LoginForm
