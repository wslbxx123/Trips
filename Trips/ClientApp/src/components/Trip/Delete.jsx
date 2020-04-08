import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Trip.css';

export function Delete(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dateStarted, setDateStarted] = useState(null);
    const [dateCompleted, setDateCompleted] = useState(null);

    useEffect(() => {
        const {id} = props.match.params;

        axios.get("api/Trips/GetTrip/"+id).then(trip => {
            const response = trip.data;

            setName(response.name);
            setDescription(response.description);
            setDateStarted(new Date(response.dateStarted).toISOString().slice(0,10));
            setDateCompleted(response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0, 10) : null);
        });
    });

    function onCancel(e) {
        const {history} = this.props;
    
        history.push("/trips");
    }
    
    function onConfirmation(e) {
        const {id} = props.match.params;
        const {history} = props;
    
        axios.delete("/api/Trips/DeleteTrip/" + id).then(result => {
            history.push("/trips");
        });
    }

    return (
        <div style={{marginTop: 10}}>
            <h2>Delete trip confirmation</h2>
            <Card className="card">
                <CardImg top width="100%" src="/assets/country_scene_redone.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <Button onClick={onCancel} outline color="default">
                        Cancel
                    </Button>
                    <Button onClick={onConfirmation} outline color="danger">
                        Confirm
                    </Button>
                </CardBody>
            </Card>
        </div>
    ); 
}