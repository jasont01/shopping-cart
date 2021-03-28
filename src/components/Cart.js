import styled from 'styled-components';
import Container from './Container';
import Button from './Button';
import { Link } from 'react-router-dom';

import CartLeft from './CartLeft';
import CartRight from './CartRight';

const CartWrapper = styled.div`
  margin: auto;
  max-width: fit-content;
`;

const ShoppingCart = styled(Container)``;

const FlexWrapper = styled.div`
  display: flex;
`;

const Cart = ({ cartData, findItem, updateCart }) => {
  return (
    <CartWrapper>
      <ShoppingCart title='Shopping Cart'>
        {!cartData.length ? (
          <h1>Cart is Empty</h1>
        ) : (
          <FlexWrapper>
            <CartLeft
              cartData={cartData}
              findItem={findItem}
              updateCart={updateCart}
            />
            <CartRight
              cartData={cartData}
              findItem={findItem}
              updateCart={updateCart}
            />
          </FlexWrapper>
        )}
        <Link to='/store'>
          <Button className='white-border'>GO BACK</Button>
        </Link>
      </ShoppingCart>
    </CartWrapper>
  );
};

export default Cart;
