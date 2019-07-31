import React from "react";
import axios from "axios";
import DocterPage from "./DocterPage";
import Loading from "./Loading";
import Error from "./Error";

class Docter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            docterdisplay: [],
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        this.fetchDocterdisplay();
    }

    fetchDocterdisplay() {
        this.setState({ loading: true, error: false });

        axios
            .get("/api/docter")
            .then(response => {
                this.setState({
                    docterdisplay: response.data,
                    loading: false,
                    error: false

                });
            })
    
            .catch(error => {
                this.setState({
                    docterdisplay: [],
                    loading: false,
                    error: true

                });
            });
    }

    render() {
        const { docterdisplay, loading, error } = this.state;

        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Error />;
        }

        return (
            <div className="conta">
                <div className="hc">
                    {docterdisplay.map(m => (
                        <DocterPage key={m.id} docterdisplay={m} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Docter;