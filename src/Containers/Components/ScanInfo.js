import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import scanCard from '../../Assets/scanCard.jpg'

export default () => {
    return (
        <Card className="mt-3">
            <CardImg top src={scanCard} />
            <CardBody className="Rokkitt text-dark width-50">
                <CardTitle><h3></h3></CardTitle>
                <CardText className="text-justify lead text-bold">
                </CardText>
            </CardBody>
        </Card>
    )
}

