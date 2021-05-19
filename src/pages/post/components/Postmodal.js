import {Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";
import {AvField, AvForm} from 'availity-reactstrap-validation';

function Postmodal({isOpen, toggle, savePosts, edit}) {
    return <div>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                Add Posts
            </ModalHeader>
            <ModalBody>
                <AvForm onSubmit={savePosts} id={'save'} model={edit?edit:{}}>
                    <AvField type={'text'} label={'Title'} name={'title'}/>
                    <AvField type={'text'} label={'Body'} name={'body'}/>
                </AvForm>
            </ModalBody>
            <ModalFooter>
                <button form={'save'}>Save</button>
                <button onClick={toggle}>Close</button>
            </ModalFooter>
        </Modal>
    </div>
}

export default Postmodal;