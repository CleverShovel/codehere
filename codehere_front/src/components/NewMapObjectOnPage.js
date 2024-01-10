import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import NewMapObjectForm from "./NewMapObjectForm";

export default function NewMapObjectOnPage({ resetState }) {
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
                        map_object={null} />
                </Row>
            </Col>
        </Fragment>
    )
}