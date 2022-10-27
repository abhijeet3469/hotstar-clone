import React from 'react'
import './Special.css'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
const Special = ({img}) => {
  const Data = [
    {
      id: 1,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3492/1363492-h-cb68215806d2",
    },
    {
      id: 2,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/405/1350405-h-6ef014bbbb18",
    },
    {
      id: 3,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3882/1373882-h-518fcc66b4ec",
    },
    {
      id: 4,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6978/1306978-h-f55db01533dc",
    },
    {
      id: 5,
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/2383/1292383-h-205d3579479f",
    },

  ];
  return (
    <Slide>
    <div className='special'>
      <div className="special-title">
        <span className="special-heading">Hotstar Special - First Episode Free</span>
      </div>
      <div className="special-card">
        {Data.map((item) => {
          return (
            <>
              <div className="special-row">
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
export default Special