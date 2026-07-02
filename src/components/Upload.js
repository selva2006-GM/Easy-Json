import { useState, useEffect } from "react";

export default function Upload(props) {

   
    function handleFile(event) {

        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {

            try {

                const data = JSON.parse(e.target.result);
                props.setJsonData(data);

                // This prints immediately because it's the parsed object
                console.log("Parsed JSON:", data);
                props.setShowUpload(false);
                props.setshowdata(true);
                props.setShowNav(true);

            } catch (error) {

                console.error("Invalid JSON File:", error);

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