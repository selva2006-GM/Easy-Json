import React from "react";

<<<<<<< HEAD


export default function Nav(){
    return(
        <>
        <div className="nav">
            <button>Show Data</button>
            <button>Add data</button>
            <button>Edit data</button>
=======
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
>>>>>>> aa1e377 (optimized the showdata)
        </div>
        </>
    )
    
}