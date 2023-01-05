import classNames from 'classnames/bind';
import styles from './ShowItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ShowItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('image')} src={data.image}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                </h4>
            </div>
        </Link>
    );
}

export default ShowItem;
