import React from "react";
import Docter from "./Docter";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";

class DocterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            docterdisplay: [],
            loading: false,
            error: false
        }
    }
    componentDidMount() {
        this.fetchDocterDetails();
    }

    fetchDocterDetails() {
        this.setState({ loading: true, error: false });
        axios.get("/api/docter")
            .then(response => {
                this.setState({
                    docterdisplay: response.data,
                    loading: false,
                    error: false
                })
            }).catch(error => {
                this.setState({
                    docterdisplay: [],
                    loading: false,
                    error: true
                })
            })

    }

    render() {
        const { docterdisplay } = this.state;
        return (
            <div className="home-container">
                {docterdisplay.map(docter => (
                    <Docter docter={docter} />
                ))}

            </div>
        );
    }
}

export default DocterPage;