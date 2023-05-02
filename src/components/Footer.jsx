import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-image: linear-gradient(to left, white 0%, grey 100%);
  margin-top: 40px;
  
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FAS</Logo>
        <Desc>
<Title>About Us</Title>
        FAS With the modern human’s obsession with appearance and convenience,
          fashion designers have a lot of factors to consider while designing
          the garments and accessories. We work with a wide range of
          materials, and have to plan for the patterns, styles, and colors of
          each item we design keeping in mind the end customer.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Our Partners</Title>
        
        <List>
          <ListItem>DHL</ListItem>
          <ListItem>GLX</ListItem>
          <ListItem>FEDEX</ListItem>
          <ListItem>UPS</ListItem>
          <ListItem>DPD</ListItem>
          <ListItem>VALUE</ListItem>

        </List>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Center>
      <Right>
       <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>Brodowiner Ring 33, 12679, Berlin
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@fas.fashion@web.de
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
