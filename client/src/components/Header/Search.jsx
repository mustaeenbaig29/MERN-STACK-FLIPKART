import { InputBase,Box,styled, List, ListItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getProducts } from "../../redux/actions/ProductActions";
import { useEffect } from "react";
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {

const [text,setText] = useState('');
const [ open, setOpen ] = useState(true)

const {products} = useSelector(state => state.getProducts)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getProducts())
},[dispatch])



    const getText = (text) => {
        setText(text)
        setOpen(false)
    }

   return(
    <SearchContainer>
        <InputSearchBase placeholder="Search for products, brands and more" onChange={(e) => getText(e.target.value)}/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
            text && 
            <ListWrapper>
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem>
                            <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setText('')}  
                      >
                        {product.title.longTitle}
                      </Link>
                        </ListItem>
                    ))
                }
            </ListWrapper>
        }
    </SearchContainer>
   )
}

export default Search