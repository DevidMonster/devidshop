import styles from './Search.module.scss';
import classNames from 'classnames/bind';

import { AiOutlineLoading3Quarters} from "react-icons/ai"
import {MdOutlineCancel} from 'react-icons/md'
import { BsSearch } from "react-icons/bs"

import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        let searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const inputRef = useRef();

    return ( 
        <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search item ..."
                spellCheck={false}
                onChange={handleChange}
            />
            {!!searchValue && !showSpinner && (
                <button className={cx('clear-btn')} onClick={handleClear}>
                    <MdOutlineCancel />
                </button>
            )}
            {showSpinner && <AiOutlineLoading3Quarters className={cx('loading')}/>}
            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                <BsSearch />
            </button>
        </div>
    );
}

export default Search;