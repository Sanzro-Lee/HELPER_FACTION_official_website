import React from 'react'
import { Carousel } from 'antd'

import './Banner.css'
import bannerimg from '../../assets/banner.png'

class Banner extends React.Component {

  render() {

    function onChange(a, b, c) {
      console.log(a, b, c);
    }

    return (
      <>
        <Carousel afterChange={onChange}>
          <div>
            <img className="banner_img" src={bannerimg} alt="banner pic" />
          </div>
          {/* <div>
              <h3>2</h3>
          </div>
          <div>
              <h3>3</h3>
          </div>
          <div>
              <h3>4</h3>
          </div> */}
        </Carousel>
      </>
    );
  }
}

export default Banner;
