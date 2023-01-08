import styles from './BoxContent.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function BoxContent() {
    const navigate = useNavigate()

    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("content_box")}>
                <p className={cx('title')}>
                    Nhận ngay ưu đãi 50% cho mọi loại đơn
                </p>
                <button className={cx("action")} onClick={() => navigate("/login")}>Đăng Ký Ngay</button>
            </div>
        </div>
    );
}

export default BoxContent;