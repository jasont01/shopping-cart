import styled from 'styled-components';

//  Original Design Credit
//  codepen:  https://codepen.io/SBDesign/pen/ervmRY
//  Converted to styled-component

const CartridgeWrapper = styled.div`
  background: rgb(156, 156, 156);
  width: 30.95em;
  height: 35.7em;
  margin: 8% auto 10%auto;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  transform-style: preserve-3d;
  border: solid 1px black;
  zoom: 0.4;
`;

const Cartridge = styled.div`
  background: rgb(156, 156, 156);
  height: 40em;
  width: 26.3em;
  margin: 0px 2.15em auto;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.6);
`;

const Ridges = styled.ul`
  width: 14%;
  margin: -415px 15px;
  border-right: 1px solid black;
  border-left: 1px solid black;
  text-align: center;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.66);
`;

const Ridge = styled.li`
  background: rgb(180, 176, 176);
  height: 1em;
  list-style: none;
  margin: 10px 0px 10px -31px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.76);
  width: 5em;
  border-radius: 1.5px;
  &.lastLine {
    height: 4.2em;
    box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.76);
  }
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 33px solid rgb(121, 117, 117);
  float: right;
  margin: 4.3em 11em;
`;

const CoverArt = styled.img`
  margin: 0em 7.7em auto;
  height: 400px;
  width: 280px;
  border-style: 0.5px solid rgba(0, 0, 0, 0.57);
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  filter: drop-shadow(1.5px 1.5px 1px rgba(44, 44, 46, 0.72));
`;

const CartridgeComponent = (props) => {
  return (
    <CartridgeWrapper>
      <Cartridge>
        <CoverArt src={props.coverart} alt='nes cover' />
        <Triangle />
        <Ridges>
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge />
          <Ridge className='lastLine' />
        </Ridges>
      </Cartridge>
    </CartridgeWrapper>
  );
};

export default CartridgeComponent;
