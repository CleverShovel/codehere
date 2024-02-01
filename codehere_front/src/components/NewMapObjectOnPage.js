import React, { Fragment, useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import NewMapObjectForm from "./NewMapObjectForm";

export default function NewMapObjectOnPage({ resetState, lon, lat }) {
    const [map_object, setMapObject] = useState(null)

    useEffect(() => {
        let new_map_object = map_object
        if (lon !== null && lat !== null) {
            if (new_map_object !== null) {
                new_map_object = {
                    "pk": new_map_object.pk,
                    "username": new_map_object.username,
                    "code_language": new_map_object.code_language,
                    "code": new_map_object.code,
                    "lon": lon,
                    "lat": lat,
                }
            } else {
                new_map_object = {
                    "pk": null,
                    "username": null,
                    "code_language": null,
                    "code": null,
                    "lon": lon,
                    "lat": lat,
                }
            }
        } else if (new_map_object !== null) {
            new_map_object.lon = null
            new_map_object.lat = null
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