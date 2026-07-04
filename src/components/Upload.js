import { useState, useEffect } from "react";

export default function Upload(props) {

    function processJson(data) {
        if (!Array.isArray(data)) {
            return data;
        }

        const result = {};

        data.forEach((item, index) => {
            result[index] = item;
        });

        return result;
    }

    function handleFile(event) {

        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {

            try {

                props.setShowUpload(false);
                props.setshowdata(true);
                props.setShowNav(true);

                let data = JSON.parse(e.target.result);
                data = processJson(data);

                props.setJsonData(data);

                try {
                    localStorage.setItem("jsonData", JSON.stringify(data));
                } catch (err) {
                    console.warn("JSON too large for localStorage.");
                }

                console.log("Parsed JSON:", data);

            } catch (error) {

                console.error("Invalid JSON File:", error);

                props.setShowUpload(true);
                props.setshowdata(false);
                props.setShowNav(false);

            }
        };

        reader.readAsText(file);
    }

    useEffect(() => {
        console.log("Updated State:", props.jsonData);
    }, [props.jsonData]);

    return (
        <input
            type="file"
            accept=".json"
            onChange={handleFile}
        />
    );
}