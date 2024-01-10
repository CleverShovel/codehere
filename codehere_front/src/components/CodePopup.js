import React, { Component, Fragment } from "react";
import { Popup } from 'react-map-gl/maplibre';

class CodePopup extends Component {
    state = {
        showPopup: false
    };

    setShowPopup(new_value) {
        this.setState(() => ({
            showPopup: new_value
        }));
    };

    render() {
        const lon = this.props.lon;
        const lat = this.props.lat;
        const username = this.props.username;
        const code = this.props.code;
        return <Fragment>
            {this.state.showPopup && (
                <Popup longitude={lon} latitude={lat}
                    anchor="bottom"
                    onClose={() => this.setShowPopup(false)}>
                    <p>Username: {username}</p>
                    <p>Code:</p>
                    <p>{code}</p>
                </Popup>)}
        </Fragment>;
    }
}

export default CodePopup;
