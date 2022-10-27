import React from "react";
import "./Latest.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const Latest = () => {
  const Data = [
    {
      id: 1,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3056/1393056-v-0fc762bea369",
    },
    {
      id: 2,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7076/1387076-v-baa4a3a98bd0",
    },
    {
      id: 3,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6452/1376452-v-25e16b21c554",
    },
    {
      id: 4,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4836/1374836-v-9e675d9bcb9e",
    },
    {
      id: 5,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3477/1363477-v-973081c00563",
    },
    {
      id: 6,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7379/1357379-v-3815883434ab",
    },
    {
      id: 7,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8462/1348462-v-261896304bbc",
    },
    {
      id: 8,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1727/1351727-v-97b6c7b4e1c4",
    },
  ];
  return (
    <Slide>
    <div className="latest">
      <div className="latest-title">
        <span className="latest-heading">Latest & Trending</span>
      </div>
      <div className="latest-card">
        {Data.map((item) => {
          return (
            <>
              <div className="latest-row">
                <img className="latest-img" src={item.url} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
    </Slide>
  );
};

export default Latest;
