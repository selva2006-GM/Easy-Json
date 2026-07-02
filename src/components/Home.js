import { useState } from "react";
import Upload from "./Upload";
import Showdata from "./Showdata";
import Nav from "./Nav";
export default function Home(){
    const [show, setShow] = useState(true);
    const [jsonData, setJsonData] = useState({});
    const [showUpload, setShowUpload] = useState(false);
    const [showdata, setshowdata] = useState(false);
    const [showNav , setShowNav] = useState(false);


    return(
        <>
        {showNav && <Nav/>}
        {show  && <button onClick={()=> {
            setShowUpload(true);
            setShow(false)

        }}>
            Upload</button>}
        {showUpload && <Upload setJsonData = {setJsonData} jsonData = {jsonData} setShow = {setShow} setShowUpload = {setShowUpload} setshowdata = {setshowdata} setShowNav = {setShowNav}/>}
        {showdata && <Showdata  jsonData = {jsonData}  />}
        </>
    );
}
