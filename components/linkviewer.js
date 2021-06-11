import styles from '../styles/LinkViewer.module.css'

const LinkViewer = (props) => {
    return (
        <div className={styles.iframeContainer}>
            <iframe src={props.url}></iframe>
        </div>
    );
};

export default LinkViewer;