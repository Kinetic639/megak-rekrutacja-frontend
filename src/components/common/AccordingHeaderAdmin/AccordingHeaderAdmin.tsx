import React from "react";
import {Accordion, Button} from "react-bootstrap";

interface Props {
    firstName: string;
    lastName: string;
}

const AccordingHeaderAdmin = (props: Props) => {

    return (
        <Accordion.Header className="accordion-header">
            <div>
                {props.firstName} {props.lastName}
            </div>
            <div className="spacer"></div>
            <div>
                <Button
                    className={`custom-button`}
                    as={'div'}
                    variant="danger"
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    Admin Power Button
                </Button>
            </div>
        </Accordion.Header>
    );
}

export {
    AccordingHeaderAdmin,
}
