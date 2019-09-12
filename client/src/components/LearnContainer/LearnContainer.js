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
        <div className="learn-more">
            <h1>Learn More</h1>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <h6>search your zip code to learn more about how to recycle different materials in your area</h6>

            <Container>
                {learnCardComponents}
            </Container>
        </div>
    )
}

export default LearnContainer;