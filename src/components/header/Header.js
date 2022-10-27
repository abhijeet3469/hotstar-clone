import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@material-ui/core";
import DropDown from './dropdown/DropDownMenu/DropDown'
import DropDownTv from "./dropdown/DropDownTv/DropDownTv";
import DropDownMovie from "./dropdown/DropDownMovie/DropDownMovie";
import DropDownSport from "./dropdown/DropDownSport/DropDownSport";
const Header = () => {
  const [dropDown, setDropDown] = useState(false)
  const [dropDown1, setDropDown1] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [dropDown3, setDropDown3] = useState(false)
  
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
        <div onMouseEnter={()=>setDropDown(true)} ><MenuIcon className="menu" onMouseLeave={()=>setDropDown(false)} /></div>{dropDown && <DropDown/>}
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
          />
          <span onMouseEnter={()=>setDropDown1(true)} onMouseLeave={()=>setDropDown1(false)} >TV</span>{dropDown1 && <DropDownTv/>}
          <span onMouseEnter={()=>setDropDown2(true)} onMouseLeave={()=>setDropDown2(false)} >Movies</span>{dropDown2 && <DropDownMovie/>}
          <span onMouseEnter={()=>setDropDown3(true)} onMouseLeave={()=>setDropDown3(false)} >Sports</span>{dropDown3 && <DropDownSport/>}
          <span>Disney+</span>
          <img className="kids"
            src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
            alt=""
          />
        </div>
        <div className="header-right">
        <Input className="search" placeholder="Search"/>
        <SearchIcon className="searchIcon"/>
        <button>SUBSCRIBE</button>
        <span>LOGIN</span>

        </div>
      </div>
    </div>
  );
};

export default Header;
