import React from 'react'
import { Layout, Row, Col } from 'antd'
import LoginForm from './components/loginForm/LoginForm'

import './App.css'

const { Content } = Layout

function App() {
	return (
		<div className='App'>
			<Layout>
				<Content>
					<Row className='row-login'>
						<Col className='col-login' span={12}>
							<LoginForm />
						</Col>
					</Row>
				</Content>
			</Layout>
		</div>
	)
}

export default App
