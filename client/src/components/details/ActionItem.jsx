import { Box, Button, styled } from "@mui/material"

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px -5px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({product}) => {
    return(
       <LeftContainer>
        <Image src={product.detailUrl}/>
        <StyledButton variant="contained" style={{marginRight: 10, background: '#ff9f00'}}>  Add to Cart </StyledButton>
        <StyledButton variant="contained" style={{background: '#fb641b'}}> Buy Now </StyledButton>
       </LeftContainer>
    )
}

export default ActionItem