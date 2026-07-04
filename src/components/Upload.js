import { useState, useEffect } from "react";

export default function Upload(props) {

<<<<<<< HEAD
=======

    function processJson(data){
        if(!Array.isArray(data)){
            return data;

        }
        const result = {};

        data.forEach((item, index) =>{
            result[index] = item;
        });

        return result;
    }
>>>>>>> aa1e377 (optimized the showdata)
   
    function handleFile(event) {

        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {

            try {

<<<<<<< HEAD
                const data = JSON.parse(e.target.result);
                props.setJsonData(data);

                // This prints immediately because it's the parsed object
                console.log("Parsed JSON:", data);
                props.setShowUpload(false);
                props.setshowdata(true);
                props.setShowNav(true);
=======
                props.setShowUpload(false);
                props.setshowdata(true);
                props.setShowNav(true);
                let data = JSON.parse(e.target.result);
                data = processJson(data);
                console.log(data);
                props.setJsonData(data);
                try {
                    localStorage.setItem("jsonData", JSON.stringify(data));
                } catch (err) {
                    console.warn("JSON too large for localStorage.");
                }
                // This prints immediately because it's the parsed object
                console.log("Parsed JSON:", data);
>>>>>>> aa1e377 (optimized the showdata)

            } catch (error) {

                console.error("Invalid JSON File:", error);
<<<<<<< HEAD
=======
                props.setShowUpload(true);
                props.setshowdata(false);
                props.setShowNav(false);

>>>>>>> aa1e377 (optimized the showdata)

            }
        };

        reader.readAsText(file);
    }

    useEffect(() => {
        console.log("Updated State:", props.jsonData);
    }, [props.jsonData]);

    return (
        <>
            <input
                type="file"
                accept=".json"
                onChange={handleFile}
            />
        </>
    );
}