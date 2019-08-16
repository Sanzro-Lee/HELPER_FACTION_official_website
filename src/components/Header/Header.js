import React from 'react';
import { Menu } from 'antd';

import './Header.css';

class Header extends React.Component {

  state = {
    current: 'mail',
  };

  render() {
    return (
        <Menu
            className="menu-main"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
        >
            <Menu.Item className="menu-item" key="mail">
                宣传图
            </Menu.Item>
            <Menu.Item className="menu-item" key="app">
                功能简介
            </Menu.Item>
            <Menu.Item className="menu-item" key="name">
                设计概念
            </Menu.Item>
            <Menu.Item className="menu-item" key="alipay">
                关于我们
            </Menu.Item>
        </Menu>
    );
  }
}

export default Header;
