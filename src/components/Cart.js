import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';

const CartWrapper = styled.div`
  margin: auto;
  max-width: fit-content;
`;

const ShoppingCart = styled(Container)``;

const FlexWrapper = styled.div`
  display: flex;
  //flex-wrap: wrap;
`;

const Item = styled(Container)`
  max-width: 40em;
  display: flex;
`;

const CartRight = styled(Container)`
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

const ItemLeft = styled.div``;

const BoxArt = styled.img`
  max-width: 70px;
  height: auto;
  margin-right: 3em;
`;

const ItemCenter = styled.div`
  max-width: 60%;
`;

const ItemTitle = styled.p`
  margin-top: 0;
`;

const ItemQty = styled.div`
  display: flex;
  margin: auto;
  /* &::before {
  content: "-";
}
&::after {
  content: "+";
} */
`;

const ItemQtyInputWrapper = styled.div`
  text-align: center;
`;

const ItemQtyInput = styled.input`
  display: block;
  width: 2.5em;
  height: 1.5em;
  margin: 8px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  border-style: solid;
  border-width: 4px;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-outset: 2;
  padding: 0.5rem 0.5rem;
  background-clip: padding-box;
  border-image-repeat: space;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
  outline-color: #e7e7e7;
  color: #fff;
  background-color: #212529;
`;

const ItemQtyLabel = styled.span`
  text-align: center;
  font-size: xx-small;
`;

const ItemRight = styled.div`
  margin-left: auto;
`;

const ItemPrice = styled.p`
  margin-top: 0;
`;

const RemoveItem = styled.p`
  font-size: xx-small;
  //text-align: center;
`;

const Cart = ({ cartData, updateCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    let newSub = 0;
    cartData.forEach((item) => {
      newSub += item.price * item.qty;
    });
    const newTax = round(newSub * 0.06);
    setSubTotal(round(newSub));
    setTax(newTax);
    setTotal(round(newSub + newTax));
  };

  const round = (num) => {
    return Math.round(num * 100) / 100;
  };

  useEffect(() => {
    updateTotal();
  }, [cartData]);

  const updateQty = (e) => {
    const newData = cartData.map((item) => {
      if (item.id === parseInt(e.target.id)) {
        return { ...item, qty: parseInt(e.target.value) || 0 };
      }
      return item;
    });
    updateCart(newData);
  };

  if (!cartData.length) {
    return (
      <CartWrapper>
        <ShoppingCart title='Shopping Cart'>
          <h1>Cart is Empty</h1>
          <Button className='white-border'>GO BACK</Button>
        </ShoppingCart>
      </CartWrapper>
    );
  }
  return (
    <CartWrapper>
      <ShoppingCart title='Shopping Cart'>
        <FlexWrapper>
          <div>
            {cartData.map((item, indx) => {
              return (
                <Item key={indx}>
                  <ItemLeft>
                    <BoxArt src={`../${item.box_art}`} alt='' />
                  </ItemLeft>
                  <ItemCenter>
                    <ItemTitle>{item.game}</ItemTitle>
                    <RemoveItem>remove</RemoveItem>
                  </ItemCenter>
                  <ItemRight>
                    <ItemPrice>$19.99</ItemPrice>
                    <ItemQty>
                      -
                      <ItemQtyInputWrapper>
                        <ItemQtyInput
                          id={item.id}
                          value={item.qty}
                          onChange={(e) => updateQty(e)}
                        />
                        <ItemQtyLabel>Qty</ItemQtyLabel>
                      </ItemQtyInputWrapper>
                      +
                    </ItemQty>
                  </ItemRight>
                </Item>
              );
            })}
          </div>
          <CartRight>
            <CartRightLine>
              <span>Subtotal</span>
              <span>{subTotal}</span>
            </CartRightLine>
            <CartRightLine>
              <span>Tax</span>
              <span>{tax}</span>
            </CartRightLine>
            <CartRightLine>
              <span>Shipping</span>
              <span>8.99</span>
            </CartRightLine>
            <CartRightLine>
              <span>Total</span>
              <span>{total}</span>
            </CartRightLine>

            <Button className='white-border'>CHECKOUT</Button>
          </CartRight>
        </FlexWrapper>
        <Button className='white-border'>GO BACK</Button>
      </ShoppingCart>
    </CartWrapper>
  );
};

export default Cart;
