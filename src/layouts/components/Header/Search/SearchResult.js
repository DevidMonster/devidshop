import { memo } from 'react';
import ShowItem from '../../../../components/ShowItem';

//import AccountItem from '~/components/AccountItem/AccountItem';

function SearhResult({ value }) {
    const searchResult = value;
    return searchResult.map((result, index) => <ShowItem key={index} data={result} />);
}

export default memo(SearhResult);
