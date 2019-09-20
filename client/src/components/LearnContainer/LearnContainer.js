import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LearnCard from "../LearnCard/LearnCard";
import recycleInfo from "../../data/recycle-info";
import "./styles.css";

function LearnContainer() {
    const learnCardComponents = recycleInfo.map(card => 
        <LearnCard 
            id={card.id}
            key={card.id} 
            imgUrl={card.image} 
            materialName={card.material} 
            info={card.text} 
        /> 
    )

    return (
        <div id="learn-container" className="learn-more">
            <header id="purpose">Our Purpose</header>
            <p id="statement">To show you just how easy recycling is by providing you with the resources to be able to effectively recycle your materials PROPERLY. Hover over what you need to recycle below to show you some of the steps you need to take to recycle each individual recyclable material. Please sign up with us to create or participate in one of many #trashtag events in your area. <a id="direct" href="#">Click here</a> to learn more about #trashtag events.</p>

            <Container>
                <Row>
                    {learnCardComponents}
                </Row>
            </Container>
            <div id="hidden"></div>
        </div>
    )
}

export default LearnContainer;