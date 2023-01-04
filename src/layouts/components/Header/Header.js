import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import { useDispatch, useSelector } from "react-redux";
import { switchMode } from "../../../redux/actions";
import { BsCart2 } from 'react-icons/bs'

import images from "../../../asset/images";

import Button from "../../../components/Button/Button";
import Search from "./Search";

const cx = classNames.bind(styles)

function Header() {
    const user = localStorage.getItem("user")
    let mode = useSelector(state => state.active) || false
    if(localStorage.getItem('mode'))  mode = localStorage.getItem('mode') === "true" ? true : false;

    const dispatch = useDispatch()
    
    const handleSwitch = () => {
        dispatch(switchMode(mode))
    }

    return <header className={cx('header_wrapper')}>
        <div className={cx('logo_box')} >
            <Button text normal className={cx("logo_navigate")} to={"/"}>
                <img src={mode ? images.logo_white : images.logo} alt="Logo" />
                <span><h2>DevidShop || Fashion</h2></span>
            </Button>
        </div>
        <Search />
        <div className={cx('action_box')}>
            <div className={cx("mode")}>
                <label htmlFor="switch" className={cx("switch-mode")}>
                    <input type="checkbox" id="switch" className={cx("switch-checkbox")} checked={mode} onChange={e => handleSwitch()}/>
                    <span className={cx("change_state_mode")}></span>
                </label>
            </div>
            <Button leftIcon={<BsCart2/>}>
                View Cart
            </Button>
            {user ? (
                <div className={cx("account")}>
                        <div className={cx("avatar")}>
                            <img src={images.user} alt="User_Avatar"/>
                        </div>
                        <p>DevidMonster</p>
                </div>
            ) : (
                <div className={cx("signIn_signUp")}>
                        <Button outline>SignIn</Button>
                        <Button>SignUp</Button>
                </div>
            )}
        </div>  
    </header>;
}

export default Header;