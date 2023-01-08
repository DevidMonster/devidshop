import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, memo, useCallback } from 'react';
import { saveURL } from '../../redux/actions';

function CheckURL() {
    let url = useSelector(state => state.prevUrl)
    const [prevUrl, setPrevUrl]= useState(null)
    console.log(url)

    const dispatch = useDispatch()

    const location = useLocation();
  
    useEffect(() => {
      // Hàm này sẽ được chạy mỗi khi pathname thay đổi và sẽ lưu pathname trước đó
      setPrevUrl(location.pathname)
      dispatch(saveURL(prevUrl));
    }, [location.pathname]);
  
    return (<></>);
}

export default memo(CheckURL);