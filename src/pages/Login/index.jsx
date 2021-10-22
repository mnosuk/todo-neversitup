import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Space, Button } from 'antd';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import logo from '../../images/logo.svg';
import { handleLogin } from './loginHelpers';

const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: white;
  justify-content: center;
  align-items: center;
  & .ant-btn {
    margin-top: 12px;
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProductLogo = styled.img`
  width: 200px;
  height: 100px;
`;

const RegisterSection = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  & span {
    margin-right:4px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
  margin-bottom: 8px;
  height: 20px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const history = useHistory();
  const onSumbit = () => {
    handleLogin(setIsloading, setErr, { email, password }).then(() => {
      history.push('/party');
    }).catch((e) => {
      console.log(e);
    });
  };
  return (
    <Layout>
      <LayoutBox>
        <ProductLogo src={logo} className="App-logo" alt="logo" />
        <ErrorMessage>{err}</ErrorMessage>
        <Space direction="vertical">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onPressEnter={onSumbit}
          />
          <Button type="primary" onClick={onSumbit} loading={isLoading} block>Login</Button>
          <RegisterSection>
            <span>no user?</span>
            <Link to="/register">Register Here</Link>
          </RegisterSection>
        </Space>
      </LayoutBox>
    </Layout>
  );
};

export default Login;
