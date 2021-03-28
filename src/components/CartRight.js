import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';

const CartRightWrapper = styled(Container)`
  width: 25em;
  padding-top: 3em;
  min-height: 30em;
  position: relative;
`;

const CartRightLine = styled.div`
  //margin: 2em;
  margin-left: 0;
  margin-bottom: 1em;
  & :last-child::before {
    position: absolute;
    right: 10em;
    content: ':';
  }
  & span:last-of-type {
    position: absolute;
    right: 1em;
  }
`;

const CartRight = ({ cartData, findItem }) => {
  const [subTotal, setSubTotal] = useState(0);

  const round = (num) => {
    return Math.round(num * 100) / 100;
  };

  useEffect(() => {
    const updateTotal = () => {
      const newTotal = cartData.reduce(
        (total, item) => total + findItem(item.id).price * item.qty,
        0
      );
      setSubTotal(round(newTotal));
    };

    updateTotal();
  }, [cartData]);

  return (
    <CartRightWrapper>
      <CartRightLine>
        <span>Subtotal</span>
        <span>{subTotal}</span>
      </CartRightLine>
      <CartRightLine>
        <span>Tax</span>
        <span>{round(subTotal * 0.06)}</span>
      </CartRightLine>
      <CartRightLine>
        <span>Shipping</span>
        <span>8.99</span>
      </CartRightLine>
      <CartRightLine>
        <span>Total</span>
        <span>{round(subTotal + round(subTotal * 0.06) + 8.99)}</span>
      </CartRightLine>

      <Button className='white-border'>CHECKOUT</Button>
    </CartRightWrapper>
  );
};

export default CartRight;
