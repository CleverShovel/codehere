import React, { Fragment, useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import NewMapObjectForm from "./NewMapObjectForm";

export default function NewMapObjectOnPage({ resetState, lon, lat }) {
    const [map_object, setMapObject] = useState(null)

    useEffect(() => {
        let new_map_object = null
        if (lon !== null && lat !== null)
            new_map_object = {
                "pk": null,
                "username": null,
                "code": null,
                "lon": lon,
                "lat": lat,
            }
        setMapObject(new_map_object)
    }, [lon, lat])

    return (
        <Fragment>
            <Col>
                <Row>
                    <h3>Add new code</h3>
                </Row>
                <Row>
                    <NewMapObjectForm
                        resetState={resetState}
                        toggle={() => { }}
                        map_object={map_object} 
                        isEdit={false}/>
                </Row>
            </Col>
        </Fragment>
    )
}