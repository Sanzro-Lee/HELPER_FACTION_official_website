import React from 'react';

import './FunInfo.css';
import img_01 from '../../assets/show_img_01.png'
import img_02 from '../../assets/show_img_02.png'

class FunInfo extends React.Component {

  render() {
    return (
        <section>
            <section className="funinfo-main">
                <section className="funinfo funinfo-01"></section>
                <section className="funinfo funinfo-word-01"></section>
            </section>
            <section className="funinfo-main">
                <section className="funinfo funinfo-02"></section>
                <section className="funinfo funinfo-word-02"></section>
            </section>
            <section className="funinfo-main">
                <img className="funinfo-img funinfo-img-01" src={img_01} alt="feature_img" />
                <img className="funinfo-img funinfo-img-02" src={img_02} alt="feature_img" />
            </section>
        </section>
    );
  }
}

export default FunInfo;
