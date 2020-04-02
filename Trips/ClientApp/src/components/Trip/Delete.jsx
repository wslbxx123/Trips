import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                    <button onClick={onCancel} className="btn btn-default">
                        Cancel
                    </button>
                    <button onClick={onConfirmation} className="btn btn-danger">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    ); 
}