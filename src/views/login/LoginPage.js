import React from 'react';
import './loginPage.css'

import { Input, Space, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class LoginPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      size: 'large'
    }
  }

  loginFun = e => {
    window.location.href='#/main'
  }

  render() {
    const { size } = this.state
    return (
      <>
        <div className='login-page-wrap'>
          <Space direction="vertical">
            <Input size="large" placeholder="请输入姓名" prefix={<UserOutlined />} />
            <Input.Password
              placeholder="请输入密码"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button type="primary" size={size} onClick={this.loginFun.bind(this)}>登录</Button>
          </Space>
        </div>
      </>
    )
  }
}

export default LoginPage