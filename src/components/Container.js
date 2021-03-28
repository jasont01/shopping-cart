import styled from 'styled-components';

//  Original Design Credit
//  https://nostalgic-css.github.io/NES.css/
//  Converted to styled-component

const NESContainer = styled.div`
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  font-family: 'Press Start 2P';
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
  border-style: solid;
  border-width: 4px;
  position: relative;
  margin: 4px;
  color: #fff;
  background-color: #212529;
  border-color: #fff;
  text-transform: uppercase;

  width: ${(props) => props.width};
  &:after {
    position: absolute;
    top: -7.2px;
    right: -7.2px;
    bottom: -7.2px;
    left: -7.2px;
    z-index: -1;
    content: '';
    background-color: #212529;
  }
`;

const Title = styled.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  font-family: 'Press Start 2P';
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: table;
  padding: 0 0.5rem;
  margin: -1.8rem 0 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #212529;
  text-transform: uppercase;
`;

const Container = ({ className, title, children }) => {
  return (
    <NESContainer className={className}>
      <Title>{title}</Title>
      {children}
    </NESContainer>
  );
};

export default Container;
