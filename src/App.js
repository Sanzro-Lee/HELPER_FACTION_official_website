import React from 'react'
import { Layout, BackTop } from 'antd'
import HeaderCus from './components/Header/Header'
import Banner from './components/Banner/Banner'
import KingKongArea from './components/KingKongArea/KingKongArea'
import FunInfo from './components/FunInfo/FunInfo'
import FooterCus from './components/Footer/Footer'

import './App.css';

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Header className="headerStyle">
        <HeaderCus />
      </Header>
      <Layout>
        <Content>
          <Banner />
          <KingKongArea />
          <FunInfo />
        </Content>
      </Layout>
      <Footer className="footerStyle">
        <FooterCus />
      </Footer>
      <BackTop />
    </Layout>
  );
}

export default App;
