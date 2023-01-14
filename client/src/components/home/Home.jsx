
// components
import { Box, styled } from '@mui/system';
import Banner from './Banner';
import NavBar from './NavBar';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';


const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`

const Home = () => {

    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" timer={false}/>
                <Slide products={products} title="Suggested Items" timer={false}/>
                <Slide products={products} title="Top Selections" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
                <Slide products={products} timer={false}/>
                <Slide products={products} timer={false}/>
                <Slide products={products} timer={false}/>
            </Component>
        </>
    )
}

export default Home;
