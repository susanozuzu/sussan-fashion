import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`

  background-color: #ffc04d;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  padding-top: 5px;
  padding-bottom: 5px;
  ${mobile({ fontSize: "15px"})}
`;

const Announcement = () => {
  return <Container>
  20% discount on first order!</Container>;
};

export default Announcement;
