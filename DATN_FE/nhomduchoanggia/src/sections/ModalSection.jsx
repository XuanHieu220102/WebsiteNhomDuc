import React, { useState } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';

export const ModalSection = () => {
    const [modals, setModals] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
        modal11: false,
        modal12: false,
        modal13: false
    });

    const toggle = nr => () => {
        const modalName = 'modal' + nr;
        setModals({ ...modals, [modalName]: !modals[modalName] });
    };

    return (
        <MDBCol lg="6" className="mb-4">
            <MDBCard>
                <MDBCardHeader>Modals</MDBCardHeader>
                <MDBCardBody>
                    <h4 className="mb-5 mt-4 dark-grey-text text-center font-bold"><strong>Position & Sizes</strong></h4>
                    <div className="text-center mb-5">
                        <p className="lead">Click buttons below to launch modals demo</p>
                    </div>
                    <MDBRow>
                        <MDBCol md="3" className="mb-3">
                            <h5 className="text-center mb-3">Frame modal</h5>
                            <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="frame position"/>
                            <div className="text-center">
                                <h5 className="my-3">Position</h5>
                                <MDBBtn color="primary" size="sm" onClick={toggle(1)}>Top</MDBBtn>
                                <MDBBtn color="primary" size="sm" onClick={toggle(2)}>Bottom</MDBBtn>
                                <MDBModal toggle={toggle(1)} isOpen={modals.modal1} position="top" frame>
                                    <MDBModalBody className="text-center">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                        <MDBBtn color="secondary" onClick={toggle(1)}>Close</MDBBtn>
                                        <MDBBtn color="primary" onClick={toggle(1)}>Save changes</MDBBtn>
                                    </MDBModalBody>
                                </MDBModal>
                                <MDBModal toggle={toggle(2)} isOpen={modals.modal2} position="bottom" frame>
                                    <MDBModalBody className="text-center">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                        <MDBBtn color="secondary" onClick={toggle(2)}>Close</MDBBtn>
                                        <MDBBtn color="primary" onClick={toggle(2)}>Save changes</MDBBtn>
                                    </MDBModalBody>
                                </MDBModal>
                            </div>
                        </MDBCol>
                        {/* Continue with other columns */}
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};


