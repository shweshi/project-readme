import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import styles from '../styles/PdfViewer.module.css'


const PdfViewer = () => {
    const viewer = useRef(null);

    const params = new URLSearchParams(window.location.search);
    const url = params.get('url');
    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
                initialDoc: url,
            },
            viewer.current
        ).then(function (instance) {
            instance.setTheme("dark");
        });
    }, []);

    return (
        <div className={styles.iframeContainer}>
            <div className="webviewer" ref={viewer}></div>
        </div>
    );
};

export default PdfViewer;