import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React ,{}from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector,useDispatch } from "react-redux";
import { Link,Redirect } from "react-router-dom";
import { log_out } from "../redux/apiCalls";
const Container = styled.div`
  height: 100px;
  background-color: black;
  ${mobile({ height: "65px" ,width:"100%"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px", marginLeft: "0px", display: "inline"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: left;
`;

const Logo = styled.h1`
  font-weight: 900;
  font-size:40px;

  ${mobile({ fontSize: "30px" ,marginLeft:0,})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "space-between"})}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({ fontSize: "14px", marginLeft: "5px", marginRight: "15px"})}
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  ${mobile({ flex: 2, justifyContent:"center", padding: "0px " ,color:"white", textDecoration: "none"})}
  /* @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  } */
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch();
console.log(user.currentUser)
const logout =()=>{
  log_out(dispatch);

Redirect("/login")
}
  return (
    
    <Container>
      <Wrapper>
        
        <Center>          
            <Logo>
              <NavLink to="/">
                FAS FASHION
              </NavLink>
            </Logo>
        </Center>

        <Right>          
          <MenuItem> <NavLink to="/">Home</NavLink></MenuItem>
          {user.currentUser==null?<><MenuItem><NavLink to="/register"> Register</NavLink></MenuItem>
          <MenuItem> <NavLink to="/login">Sign In</NavLink></MenuItem></>
          :<MenuItem> <NavLink   onClick={logout}>logout</NavLink></MenuItem>
          }
        
       
          
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>                        
          </MenuItem>          
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
