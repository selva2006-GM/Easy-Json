import { useEffect, useState } from "react";
import Upload from "./Upload";
import Showdata from "./Showdata";
import Nav from "./Nav";
import Adddata from "./Adddata";
import Editdata from "./Editdata";
import Download from "./Download";
export default function Home(){
    const [show, setShow] = useState(true);
    const [jsonData, setJsonData] = useState(()=>{
        const saved = localStorage.getItem("jsonData");
        return saved ? JSON.parse(saved) : null;
    });
    const [showUpload, setShowUpload] = useState(false);
    const [showNav , setShowNav] = useState(false);
    const [showdata, setshowdata] = useState(false);
    const [adddata, setAdddata] = useState(false);
    const [editData, setEditData] = useState(false);
    const [showDonate, setShowDonate] = useState(false);

    function resetState() {
        setShow(true);
        setJsonData(null);
        setShowUpload(false);
        setshowdata(false);
        setShowNav(false);
    
        localStorage.removeItem("jsonData");
    }

    function change(page) {
        setshowdata(false);
        setAdddata(false);
        setEditData(false);
    
        page(true);
    }
    
    useEffect(()=>{
        if(jsonData){
            setShow(false);
            setShowUpload(false);
            setshowdata(true);
            setShowNav(true);
        }
    }, []);

    
    return(
        <>
        {showNav && <Nav 
        resetState = {resetState} 
        setshowdata = {setshowdata}
        change = {change} 
        setAdddata = {setAdddata} 
        setshowdata = {setshowdata}
        setEditData = {setEditData}
        setShowDonate = {setShowDonate}
        
        jsonData = {jsonData}/>}
        {show  && <button onClick={()=> {
            setShowUpload(true);
            setShow(false)

        }}>
            Upload</button>}
        {showUpload && <Upload setJsonData = {setJsonData} jsonData = {jsonData} setShow = {setShow} setShowUpload = {setShowUpload} setshowdata = {setshowdata} setShowNav = {setShowNav}/>}
        {showdata && <Showdata  jsonData = {jsonData}  />}
        {adddata && <Adddata  jsonData = {jsonData} />}
        {editData && 
        <Editdata
        jsonData={jsonData}
        setJsonData={setJsonData}
            />
        }
        
        {showDonate &&<Download jsonData ={jsonData} 
        setShowDonate = {setShowDonate}/>
         }
        </>
);
}
