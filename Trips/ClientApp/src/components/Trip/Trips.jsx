import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllTrips} from '../../actions/tripActions';
import { Button } from 'reactstrap';

export class Trips extends Component
{
    constructor(props){
        super(props);

        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);

        this.state = {
            trips: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount(){
        this.props.getAllTrips();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.trips.data != this.props.trips.data) {
            this.setState({trips: this.props.trips.data});
        }
    }

    onTripUpdate(id){
        const {history} = this.props;

        history.push('/update/'+id);
    }

    onTripDelete(id){
        const {history} = this.props;

        history.push('/delete/'+id);
    }

    renderAllTripsTable(trips){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toLocaleDateString() :  '-' }</td>
                            <td>
                                <div className="form-group">
                                    <Button onClick={() => this.onTripUpdate(trip.id)} outline color="success">
                                        Update
                                    </Button>
                                    <Button onClick={() => this.onTripDelete(trip.id)} outline color="danger">
                                        Delete
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        );
    }

    render(){

        let content = this.props.trips.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
            this.state.trips.length && this.renderAllTripsTable(this.state.trips)
        )

        return (
            <div>
                <h1>All trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({trips}) => ({
    trips
})

export default connect(mapStateToProps, {getAllTrips})(Trips);