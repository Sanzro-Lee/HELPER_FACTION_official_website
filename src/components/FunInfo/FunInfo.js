import React from 'react'
import { Row, Col } from 'antd'

import './FunInfo.css'
import img_01 from '../../assets/show_img_01.png'
import img_02 from '../../assets/show_img_02.png'
import wallet from '../../assets/wallet.svg'
import list from '../../assets/list.svg'
import bgmanager from '../../assets/bgmanager.png'

class FunInfo extends React.Component {

  render() {
    return (
            <>
                <Row className="fontSet">
                    <Col 
                        xs={{ span: 10, offset: 1 }} 
                        lg={{ span: 5, offset: 2 }}
                    >
                        <img 
                            className="img_style"
                            src={list} alt="list"
                        />
                    </Col>
                    <Col
                        xs={{ span: 10, offset: 1 }}
                        lg={{ span: 10, offset: 5 }}
                    >
                        <span>小程序设计，
                            <br/>无需下载，
                            <br/>授权即可登录，
                            <br/>随时随地接单。
                        </span>
                    </Col>
                </Row>
                <Row className="fontSet">
                    <Col
                        xs={{ span: 10, offset: 1 }}
                        lg={{ span: 10, offset: 1 }}
                    >
                        <span>我们将协助您：
                            <br/>更好地服务您的客户，
                            <br/>更好地赚外快！
                            <br/>更快地享受自由！
                        </span>
                    </Col>
                    <Col  
                        xs={{ span: 10, offset: 1 }} 
                        lg={{ span: 12, offset: 1 }}
                    >
                        <img className="img_style" src={wallet} alt="wallet" />
                    </Col>
                </Row>
                <Row className="fontSet bgManagerStyle">
                    <Col
                        xs={{ span: 20, offset: 2 }}
                        lg={{ span: 12, offset: 6 }}
                        style={{marginBottom:'5vw'}}
                    >
                        专业后台管理系统，高效派单
                    </Col>
                    <Col
                        xs={{ span: 12, offset: 3 }}
                        lg={{ span: 12, offset: 3 }}
                    >
                        <img src={bgmanager} alt="bgmanager" style={{"width": "80vw"}} />
                    </Col>
                </Row>
                <Row className="fontSet">
                    <Col
                        xs={{ span: 20, offset: 2 }}
                        lg={{ span: 10, offset: 7 }}
                    >
                        <span>优雅小程序，体验极佳</span>
                    </Col>
                </Row>
                <Row className="weAppIns">
                    <Col
                        xs={{ span: 5, offset: 2 }}
                        lg={{ span: 6, offset: 2 }}
                    >
                        <img className="funinfo-img" src={img_01} alt="feature_img" />
                    </Col>
                    <Col
                        xs={{ span: 6, offset: 5 }}
                        lg={{ span: 6, offset: 5 }}
                    >
                        <img className="funinfo-img" src={img_02} alt="feature_img" />
                    </Col>
                </Row>
            </>
    );
  }
}

export default FunInfo;
