import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];

  const navigate = useNavigate();
  const navToLoginPage = () => {
    navigate("/login");
  };
  const navToProductAllPage = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key == "Enter") {
      let keyword = event.target.value;
      console.log("clicked", event.key, "key is", keyword);
      navigate(`/?q=${keyword}`)
    }
  };

  return (
    <div>
      <div>
        <div className="login_area">
          <FontAwesomeIcon icon={faUser} />
          <div onClick={navToLoginPage}>LOGIN</div>
        </div>
      </div>

      <div>
        <div className="nav_section">
          <img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="" onClick={navToProductAllPage} />
        </div>
      </div>

      <div className="menu_area">
        <ul className="menu_list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search_area">
          <FontAwesomeIcon icon={faSearch} className="search_button" />
          <input type="text" className="search_input" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
