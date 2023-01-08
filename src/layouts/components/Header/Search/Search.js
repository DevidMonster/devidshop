import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import * as request from '../../../../utils/httpRequest';
import { useDebounce } from '../../../../hooks';
import SearchResult from './SearchResult';

import { AiOutlineLoading3Quarters} from "react-icons/ai"
import {MdOutlineCancel} from 'react-icons/md'
import { BsSearch } from "react-icons/bs"
import { Wrapper as PopperWrapper } from "../../../../components/popper"

import { useEffect, useState, useRef, memo } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    let mode = useSelector(state => state.active) || false

    const resultValue = useDebounce(searchValue, 500);
    const navigate = useNavigate()

    useEffect( () => {
        if (!resultValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setShowSpinner(true);
            const dataResult = await request.get("/item", {
                params: {
                    name: resultValue
                },
            })
            setSearchResult(dataResult)
            
            setShowSpinner(false);
        }
        fetchAPI()
    }, [resultValue])

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

    const handleNavigate = () => {
        setSearchValue("")
        navigate(`/product/${searchValue}`)
    }

    const inputRef = useRef();
console.log(searchResult)
    return ( 
        <div className={cx("wrapper")}>
            <HeadlessTippy
                interactive
                theme={mode ? 'light' : 'material'}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx("result-item")}>
                            <h4 className={cx('search-title')}>Items</h4>
                            <SearchResult value={searchResult} />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search item ..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!searchValue && !showSpinner && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <MdOutlineCancel />
                        </button>
                    )}
                    {showSpinner && <AiOutlineLoading3Quarters className={cx('loading')}/>}
                    <button className={cx('search-btn')} onClick={() => handleNavigate()}>
                        <BsSearch />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default memo(Search);