import styled from 'styled-components';
import Container from './Container';

const Item = styled(Container)`
  min-width: 40em;
  max-width: 40em;
  display: flex;
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

const CartLeft = ({ cartData, findItem, updateCart }) => {
  const updateQty = (e) => {
    const newData = cartData.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, qty: parseInt(e.target.value) || 0 };
      }
      return item;
    });
    updateCart(newData);
  };

  return (
    <div>
      {cartData.map((CartItem) => {
        const item = findItem(CartItem.id);
        return (
          <Item key={item.id}>
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
                <ItemQtyInputWrapper>
                  <ItemQtyInput
                    id={item.id}
                    value={CartItem.qty}
                    onChange={(e) => updateQty(e)}
                  />
                  <ItemQtyLabel>Qty</ItemQtyLabel>
                </ItemQtyInputWrapper>
              </ItemQty>
            </ItemRight>
          </Item>
        );
      })}
    </div>
  );
};

export default CartLeft;
