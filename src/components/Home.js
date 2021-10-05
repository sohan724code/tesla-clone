import React from "react"
import Sections from "./Sections";
import styled from "styled-components"

function Home(){
    return(
    <Container>
    <Sections
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftButton="Custom order"
        rightButton="Existing inventory"
    />
    <Sections
        title= "Model Y"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-y.jpg"
        leftButton="Custom order"
        rightButton="Existing inventory"
    />
    <Sections
        title= "Model 3"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-3.jpg"
        leftButton="Custom order"
        rightButton="Existing inventory"
    />
    <Sections
        title= "Model X"
        description= "Order Online for Touchless Delivery"
        backgroundImg= "model-x.jpg"
        leftButton="Custom order"
        rightButton="Existing inventory"
    />
     <Sections
        title= "Lowest Cost Soler Panels in America"
        description= "Money-back guarantee"
        backgroundImg= "solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
    />
      <Sections
        title= "Soler Roof"
        description= "Produce Clean Energy From Your Roof"
        backgroundImg= "solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
    />
     <Sections
        title= "Accessories"
        backgroundImg= "accessories.jpg"
        leftButton="Shop Now"
    />
    
    </Container>
    );
}

export default Home;

const Container = styled.div `
        height: 100vh;
       
`