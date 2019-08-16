import React from 'react';

import './Footer.css';

class Footer extends React.Component {

  render() {
    return (
        <section className="footer-main">
            <section className="about-us">
                <h1>关于我们：</h1>
                <p>叫到帮 成立于 2018 年<br/>
                    一款帮助用户更好地利用自身技能的产品<br/>
                    我们将越做越好，倾情为您服务
                </p>
            </section>
            <section className="contact-us">
                <h1>联系我们：</h1>
                <p>
                    13631487166
                </p>
                <p>
                    G6-Power
                </p>
                <p>
                    3340994287
                </p>
            </section>
            <section className="copy-right">
                <p>叫到帮™ HELPER FACTION Copyright © Since 2018</p>
            </section>
        </section>
    );
  }
}

export default Footer;
