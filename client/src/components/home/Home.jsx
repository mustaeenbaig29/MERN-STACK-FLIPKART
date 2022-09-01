import { Fragment } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar"
import Slide from "./Slide";
import {Box,styled} from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/ProductActions"
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
padding: 10px;
background: #f2f2f2;
`
const Home = () => {

  const {products} =  useSelector(state => state.getProducts)
  console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return(
        <Fragment>
            <Navbar/>
            <Component>
            <Banner/>
            <MidSlide products={products} timer={true}/>
            <Slide products={products} timer={false}/>
            <Slide products={products} timer={false}/>
            <MidSection/>
            <Slide products={products} timer={false}/>
            <Slide products={products} timer={false}/>
            <Slide products={products} timer={false}/>
            </Component>
           
        </Fragment>
    )
}

export default Home