import React from "react";
import Container from 'react-bootstrap/Container'
import LearnCard from "../LearnCard/LearnCard";
import recycleInfo from "../../data/recycle-info";
import "./styles.css";

function LearnContainer() {
    const learnCardComponents = recycleInfo.map(card => 
        <LearnCard 
            key={card.id} 
            imgUrl={card.image} 
            materialName={card.material} 
            info={card.text} 
        /> 
    )

    return (
        <div id="learn-container" className="learn-more">
            <header id="purpose">Our Purpose</header>
            <p>To show you just how easy recycling is by providing you with the resources to be able to effectively recycle your materials PROPERLY. Below is a detailed table with the steps you need to take to recycle each individual recyclable material. Please sign up with us to participate or create #trashtag events in your area. <a href="#">Click here</a> to learn more about #trashtag events.</p>

            <Container>
                {learnCardComponents}
            </Container>
        </div>
    )
}

export default LearnContainer;