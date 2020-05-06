import React from 'react'
import { Row, Col } from 'antd'

import './Header.css'
import logotype1 from '../../assets/logoType1.png'

class HeaderCus extends React.Component {

  render() {
    return (
        <>
            <Row>
                <Col className="menu-logo">
                    <img src={logotype1} alt="logo" />
                </Col>
                <Col className="menu-title">
                    叫到帮 - 您生活的好帮手
                </Col>
            </Row>
        </>
    );
  }
}

export default HeaderCus;
