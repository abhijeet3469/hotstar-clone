import React from 'react'
import './Sports.css'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Sports = () => {
  const Data = [
    {
      id: 1,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/5172/1395172-h-a7bd2e6b1bae",
    },
    {
      id: 2,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/5252/1395252-h-89a811298427",
    },
    {
      id: 3,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4814/1394814-h-2da76c581038",
    },
    {
      id: 4,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6021/1396021-h-35d2ea44d531",
    },
    {
      id: 5,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6089/1396089-h-ed8d1736deb3",
    },

  ];
  return (
    <Slide>
    <div className='sports'>
      <div className="sports-title">
        <span className="sports-heading">Best In Sports</span>
      </div>
      <div className="sports-card">
        {Data.map((item) => {
          return (
            <>
              <div className="sports-row">
                <img src={item.url} alt="" />
              </div>
            </>
          );
        })}
      </div>
      </div>
      </Slide>
  );
};

export default Sports

