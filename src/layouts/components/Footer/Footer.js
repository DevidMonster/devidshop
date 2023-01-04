import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '../../../asset/images';

import Button from '../../../components/Button/Button';

import { useSelector } from "react-redux";

const cx = classNames.bind(styles)

function Footer() {
    let mode = useSelector(state => state.active) || false
    if(localStorage.getItem('mode'))  mode = localStorage.getItem('mode') === "true" ? true : false;
    return (
    <div className={cx("wrapper")}>
        <div className={cx("top")}>
            <div className={cx("info")}>
                <div className={cx('logo_box')} >
                    <Button text normal className={cx("logo_navigate")} to={"/"}>
                        <img src={mode ? images.logo_white : images.logo} alt="Logo" />
                        <span><h2>DevidShop || Fashion</h2></span>
                    </Button>
                </div>
                <p className={cx("contact-list")}>
                    Điện thoại: <a href='tel:0396.626.650'>0396265650</a><br/>Email: <a href='mailto: mrabt905@gmail.com'>mrbat905@gmail.com</a><br/>Địa chỉ: Nhà số 46, Phố Hàng Bồ, Quận Hoàn Kiếm, Thành Phố Hà Nội
                </p>
            </div>
        </div>
        <div className={cx("bottom")}>

        </div>
    </div>);
}

export default Footer;