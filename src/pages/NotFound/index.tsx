import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  background-color: #1890ff;
  height: 100vh;
  color: white;
`;

const FourOFourSpan = styled.span`
  font-size: 200px;
`;

const TextFooter = styled.div`
  & a {
    color: white;
    margin-left: 8px;
    text-decoration: underline;
  }
`;

export default () => (
  <Layout>
    <FourOFourSpan>404</FourOFourSpan>
    <TextFooter>
      <span>Take me back to</span>
      <Link to="/">Home</Link>
    </TextFooter>
  </Layout>
);
