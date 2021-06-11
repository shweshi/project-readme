import React from "react";
import dynamic from "next/dynamic";
const LinkViewer = dynamic(() => import("../components/linkviewer"), { ssr: false });
import Sidebar from "../components/sidebar";

function LinkView() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-sm p-3 min-vh-100">
                    <LinkViewer />
                </div>
            </div>

        </div>
    );
}

export default LinkView;