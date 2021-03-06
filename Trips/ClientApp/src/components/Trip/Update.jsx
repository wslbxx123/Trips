import React, {Component} from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class Update extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: "",
            dateCompleted: ""
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get("api/Trips/GetTrip/"+id).then(trip => {
            const response = trip.data;

            this.setState({
                name: response.name,
                description: response.description,
                dateStarted: new Date(response.dateStarted).toISOString().slice(0,10),
                dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0, 10) : null
            })
        });
    }

    onUpdateCancel() {
        const {history} = this.props;
        history.push('/trips');
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDateStarted(e) {
        this.setState({
            dateStarted: e.target.value
        });
    }

    onChangeDateCompleted(e) {
        this.setState({
            dateCompleted: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;
        const {id} = this.props.match.params;

        let tripObject = {
            name: this.state.name,
            description: this.state.description,
            dateStarted: new Date(this.state.dateStarted).toISOString(),
            dateCompleted: this.state.dateCompleted ? new Date(this.state.dateCompleted).toISOString() : null
        }

        axios.put("api/Trips/UpdateTrip/"+id, tripObject).then(result => {
            history.push('/trips');
        });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="/assets/country_scene_redone.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Update the trip</CardTitle>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Trip name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Trip description: </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>
                            <div className="row">
                                <div className="col col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Date of start: </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={this.state.dateStarted}
                                            onChange={this.onChangeDateStarted}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-md-6 col-sm-6 col-xs-12">
                                    <div className="form-group">
                                        <label>Date of complete: </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={this.state.dateCompleted}
                                            onChange={this.onChangeDateCompleted}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <Button onClick={this.onUpdateCancel} outline color="default">Cancel</Button>
                                <Button type="submit" outline color="success">Update</Button>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}