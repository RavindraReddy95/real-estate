import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000" : "#05B1FB")};
  text-decoration: none;
  font-size: 18px;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: #fff;
  border-radius: 10px;

  &:hover {
    transform: translateY(-2px);
  }
`;
