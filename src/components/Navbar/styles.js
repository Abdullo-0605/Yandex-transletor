import styled from "styled-components"

export const NavbarWrapper = styled.nav`
width: 500px;
margin: auto;
color: var(white);
`;

export const NavbarContainer = styled.div`
margin: auto;
align-items: center;
`;

export const Logo = styled.p`
font-size: 60px;
//color: var(--black);
color: var(--white);
font-weight: lighter;
padding: 30px 0;
text-align: center;
span{
font-weight: bold;
color: red;
padding: 0 20px;
text-align: center;
}

@media only screen and (max-width: 942px){
font-size: 50px;
padding: 25px 0;
}
@media only screen and (max-width: 768px){
font-size: 40px;
padding: 20px 0;
}
@media only screen and (max-width: 425px){
font-size: 30px;
padding: 10px 0;
}
`;