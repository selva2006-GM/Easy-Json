<<<<<<< HEAD
function ShowObject({ data }) {
=======
import React from "react";
import { useState } from "react";

const ShowObject = React.memo(function ShowObject({ data }) {
    if(data === null || data === undefined){
        return null;
    }
>>>>>>> aa1e377 (optimized the showdata)
    return (
        <>
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}</strong> :
                    {typeof value === "object" && value !== null ? (
                        <div style={{ marginLeft: "20px" }}>
                            <ShowObject data={value} />
                        </div>
                    ) : (
                        <> {String(value)}</>
                    )}
                </div>
            ))}
        </>
    );
<<<<<<< HEAD
}

export default function Showdata({ jsonData }) {
    return <ShowObject data={jsonData} />;
=======
})

export default function Showdata({ jsonData }) {


    const rows = Object.entries(jsonData);
    const [visibleCount, setVisibleCount] = useState(10);


    function handleScroll(e) {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
    
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            setVisibleCount(prev => Math.min(prev + 10, rows.length));
        }
    }

    return (
        <>
        <div
            style={{ height: "1000px", overflowY: "auto" }}
            onScroll={handleScroll}
        >
            {rows.slice(0, visibleCount).map(([index, object]) => (
                <div key={index}>
                    <h3>{index}</h3>
                    <ShowObject data={object} />
                    <hr />
                </div>
            ))}
        </div>
        </>
    );
>>>>>>> aa1e377 (optimized the showdata)
}