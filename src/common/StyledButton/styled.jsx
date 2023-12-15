import styled from "styled-components";

export const StyledButton = styled.a`
 font-weight: 700;
 display: inline-flex;
 padding: 12px 16px;
 justify-content: center;
 align-items: center;
 gap: 16px;
 color: white;
 background-color: blue;
 border-radius: 4px;
 border: none;
 background: #0366d6;
 transition: 0.3s;
 display: inline-flex;
 text-decoration: none;
 cursor: pointer;
 width: max-content;

 &:focus-visible {
  outline: none;
  scale: 1.1;
  filter: brightness(110%);
 }

 &:hover {
  scale: 1.1;
  filter: brightness(110%);
 }

 &:active {
  filter: brightness(130%);
 }
`;
