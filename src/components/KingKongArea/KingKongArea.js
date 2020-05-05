import React from 'react'
import { Row, Col, Divider } from 'antd'
import { SendOutlined, RocketOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons'

import './KingKongArea.css'

class KingKongArea extends React.Component {

  render() {
    return (
        <Row className="kingkongarea-main" align="middle">
          <Col className="kingkongarea KKA-01" xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <div className="mainWord">
              <SendOutlined />
              <span>解放自我</span>
            </div>
            <Divider className="cutline" />
            <div className="insWords">
              <span>随时接单，无需打卡</span><br/>
              <span>打开软件即可接单</span>
            </div>
          </Col>
          <Col className="kingkongarea KKA-02" xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
              <div className="mainWord">
                <RocketOutlined />
                <span>随时随地</span>
              </div>
              <Divider className="cutline" />
              <div className="insWords">
                <span>身在何方都可以随时接单</span>
              </div>
          </Col>
          <Col className="kingkongarea KKA-03" xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
              <div className="mainWord">
                <MessageOutlined />
                <span>自带短信系统</span>
              </div>
              <Divider className="cutline" />
              <div className="insWords">
                <span>无需担心通讯问题，</span><br/>
                <span>一键拨打电话</span>
              </div>
          </Col>
          <Col className="kingkongarea KKA-04" xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
              <div className="mainWord">
                <LikeOutlined />
                <span>活用自己的技能</span>
              </div>
              <Divider className="cutline" />
              <div className="insWords">
                <span>利用闲暇时间，</span><br/>
                <span>活用自己的技能赚得外快</span>
              </div>
          </Col>
        </Row>
    );
  }
}

export default KingKongArea;
