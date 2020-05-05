import React from 'react'
import { Row, Col } from 'antd'
import { PhoneFilled, WechatOutlined, QqOutlined } from '@ant-design/icons'

import './Footer.css'
import officiallogo from '../../assets/officiallogo.png'

class FooterCus extends React.Component {

  render() {

    return (
        <>
            <Row className="footer-main">
                <Col className="about-us" xs={{ span: 30, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <h1>关于我们：</h1>
                    <p>叫到帮 成立于 2018 年<br/>
                        一款帮助用户更好地利用自身技能的产品<br/>
                        我们将越做越好，倾情为您服务
                    </p>
                </Col>
                <Col className="contact-us" xs={{ span: 30, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <h1>联系我们：</h1>
                    <p>
                        <PhoneFilled />：13631487166
                    </p>
                    <p>
                        <WechatOutlined />：G6-Power
                    </p>
                    <p>
                        <QqOutlined />：3340994287
                    </p>
                </Col>
                <Col className="copy-right" xs={{ span: 30, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <img src={officiallogo} alt='officiallogo' />
                </Col>
            </Row>
            <p className="bottomWord">叫到帮™ HELPER FACTION Copyright © Since 2018</p>
        </>
    );
  }
}

export default FooterCus;
