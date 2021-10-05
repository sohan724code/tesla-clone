import react, { useState } from "react"
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import carInfo from "./carInfo";
import {useSelector} from "react-redux";

function Header(){
    const [isMenuClicked, setMenuClicked] = useState(false);
    const cars = useSelector(carInfo);
    console.log(cars);
    function menuClicked(){
        return(
            setMenuClicked(true)
        );
    }

    function closeClicked(){
        return(
            setMenuClicked(false)
        );
    }

    return (
    <div>
        <Container>
            <a>
                <img src="/images/logo.svg" alt="This is tesla logo"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key = {index} href="#">{car.title}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu 
                    onClick= {menuClicked}
                />
            </RightMenu>
            <BurgerNav show ={isMenuClicked}>
                <CloseWrapper  onClick= {closeClicked}>
                    <CustomClose
                    />
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li><a key = {index} href="#">{car.title}</a></li>
                ))}
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>
            </BurgerNav>
        </Container>
    </div>);
}

export default Header;

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;

    }
`;

const CustomMenu = styled(MenuIcon) `
    cursor: pointer;
`;

const BurgerNav = styled.div `
    
    position: fixed;
    width: 300px;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background: white;
    z-index: 999;
    list-style: none;
    padding: 20px;
    text-align: start;
    transform: ${props => props.show? "translateX(0)": "translateX(100%)"};\
    transition: transform .2s t;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2)
    }

    a{
        font-width: 600px;
    }
    
`;

const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon) `
    cursor: pointer;
    
`;