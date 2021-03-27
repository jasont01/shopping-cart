import styled from 'styled-components';

//blue
//background-color: #209cee
//box-shadow: inset -4px -4px #006bb3

//yellow
//background-color: ##f7d51d
//box-shadow: inset -4px -4px #e59400

//red
//background-color: ##e76e55
//box-shadow: inset -4px -4px #8c2022

//green
//background-color: #92cc41
//box-shadow: inset -4px -4px #4aa52e

const NESBtn = styled.button`
  font-family: 'Press Start 2P', cursive;
  box-sizing: border-box;
  border-radius: 0;
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  text-transform: none;
  border-style: solid;
  border-width: 4px;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
  border-image-outset: 2;
  position: relative;
  display: inline-block;
  padding: 6px 8px;
  margin: 4px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-image-repeat: space;
  color: #fff;
  background-color: #92cc41;

  &.white-border {
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
  }

  &:after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: '';
    box-shadow: inset -4px -4px #4aa52e;
  }
`;

const Button = ({className, children}) => {
  return <NESBtn className={className}>{children}</NESBtn>;
};

export default Button;
