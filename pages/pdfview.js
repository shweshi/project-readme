import React from "react";
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("../components/pdfviewer"), { ssr: false });
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function PdfView() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-sm p-3 min-vh-100">
                    <PdfViewer />
                </div>
            </div>

        </div>
    );
}

export default PdfView;