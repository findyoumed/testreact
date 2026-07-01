import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Container, Offcanvas } from 'react-bootstrap';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ showSearch, setShowSearch ] = useState(false);
    const [ keyword, setKeyword ] = useState("");
    const menuList = ['Women', 'Men', 'Kids', 'Home'];
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const logout = () => {
        setAuthenticate(false)
    }
    const goToHome = () => {
        navigate("/");
    }
    const search = (event) => {
        if(event.key === "Enter") {
            // 입력한 검색어를 읽어와서 url을 바꿔준다.
            navigate(`/?q=${keyword}`);
        } 
    }
    const closeShowMenu = () => setShowMenu(false);
    const toggleShowMenu = () => setShowMenu((s) => !s);
    const toggleShowSearch = () => setShowSearch((s) => !s);

    return (
        <div className="mb-5">
            <Container>
                <div className="login-area mt-2">
                    <div className="menu-area-sm">
                        <div>
                            <FontAwesomeIcon onClick={toggleShowMenu} className="d-flex d-md-none" icon={faBars} />
                            <Offcanvas show={showMenu} onHide={closeShowMenu} className="d-flex d-md-none" scroll={true}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Category</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul className='menu-list-sm'>
                                        {menuList.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })}
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <div className={`search-area d-flex d-lg-none ${showSearch?'underline':''}`}>
                            <FontAwesomeIcon icon={faSearch} onClick={toggleShowSearch} />
                            <input type="text" 
                                placeholder="검색"
                                value={keyword}
                                className={!showSearch?"d-none":""}
                                onInput={(event) => setKeyword(event.target.value)}
                                onKeyUp={(event) => search(event)} />
                        </div>
                    </div>
                    <div className={authenticate?"logout-button":"login-button"} onClick={authenticate? logout : goToLogin}>
                        <FontAwesomeIcon icon={authenticate? faRightFromBracket : faUser} />
                        <span className="d-none d-lg-flex">{authenticate? "로그아웃" : "로그인"}</span>
                    </div>
                </div>
                <div className='nav-section'>
                    <img onClick={goToHome}
                        width={100}
                        src='https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg'
                        alt='hnm logo' />
                </div>
                <div className='menu-area d-md-flex d-none'>
                    <div></div>
                    <ul className='menu-list'>
                        {menuList.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                    <div className='search-area d-lg-flex d-none underline'>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' 
                            value={keyword}
                            onInput={(event) => setKeyword(event.target.value)}
                            onKeyUp={(event) => search(event)} placeholder='검색' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
