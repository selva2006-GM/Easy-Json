import React from "react";

import QRCode from "react-qr-code";



export default function Nav(props){

    

    
    return(
        <>
        <div className="nav">
            <button onClick={props.resetState}>Back </button>
            <button onClick={() => props.change(props.setshowdata)}>Show Data</button>
            <button onClick={() => props.change(props.setAdddata)}>Add Data</button>
            <button onClick={() => props.change(props.setEditData)} >Edit data</button>
            <button onClick={() => props.change(props.setShowDonate)}>
                Download
            </button>
        </div>
        </>
    )
    
}