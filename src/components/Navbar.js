import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ["전체","여성","남성","아동","Accessories","SALE"];
  const navigate = useNavigate();
  const goToLogin=()=>{
    navigate("/login")
  }
  const search=(event)=>{
    if(event.key === "Enter"){          //Enter 만 작동한다
      let keyword = event.target.value;  //입력한 검색어를 읽어 와서
      // console.log("keyword",keyword)
      navigate(`/?q=${keyword}`)         // url(query값)을 바꿔 준다
    }
  }

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
      {authenticate ? (
        <div onClick={()=>setAuthenticate(false)}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그아웃</div>
      </div>
      ):(
        <div onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      )}
      </div>
          <div className='nav-section'>
            <Link to="/">
            <img width={100} src="/local.png" alt="회사 이미지" />
            </Link>           
          </div>
          <div className="menu-area">
            <ul className="menu-list">
              {menuList.map((item, index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyPress={(event)=>search(event)}/>
            </div>
          </div>
    </div>
  );
}

export default Navbar;
