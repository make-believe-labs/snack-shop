// eslint-disable-next-line no-redeclare
import { RootState } from '../store'
import { useSelector } from 'react-redux';

function BasketCounter() {

    const list = useSelector((state: RootState) => state.basket);

    return (
        <>
            { list.snacksInBasket.length }
        </>

    )
};

export default BasketCounter;