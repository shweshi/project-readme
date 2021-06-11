import Modal from 'react-bootstrap/Modal'
import LinkViewer from './linkviewer';
import styles from '../styles/Modal.module.css'

function IFrameModal(props) {
    return (
        <Modal {...props} dialogClassName={styles.customModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><LinkViewer url={props.url}></LinkViewer></Modal.Body>
        </Modal>
    );
}

export default IFrameModal;