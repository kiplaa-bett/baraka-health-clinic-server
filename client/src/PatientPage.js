import React from "react";
import Patient from "./Patient";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";

class PatientPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patientdisplay: [],
            loading: false,
            error: false
        }
    }
    componentDidMount() {
        this.fetchPatientDetails();
    }

    fetchPatientDetails() {
        this.setState({ loading: true, error: false });
        axios.get("/api/patient")
            .then(response => {
                this.setState({
                    patientdisplay: response.data,
                    loading: false,
                    error: false
                })
            }).catch(error => {
                this.setState({
                    patientdisplay: [],
                    loading: false,
                    error: true
                })
            })

    }

    render() {
        const { patientdisplay } = this.state;
        return (
            <div className="home-container">
                {patientdisplay.map(patient => (
                    <Patient patient={patient} />
                ))}

            </div>
        );
    }
}

export default PatientPage;