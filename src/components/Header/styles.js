import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrap = styled.header`
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #254694ff, #465e90ff);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
`;

export const Brand = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link).withConfig({
  shouldForwardProp: prop => prop !== 'isActive'
})`
  text-decoration: none;
  color: ${props => props.isActive !== '#007bff' ? '#fff' : '#007bff'};
  font-size: ${props => props.isActive ? '18px' : '16px'};
  font-weight: 500;

  &:hover {
    color: #007bff;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
