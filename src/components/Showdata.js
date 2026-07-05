import React, { useState } from "react";

const ShowObject = React.memo(function ShowObject({ data }) {
    if (data === null || data === undefined) {
        return null;
    }

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
});

function containsValue(obj, search) {
    search = search.toLowerCase();

    if (obj === null || obj === undefined) return false;

    if (typeof obj !== "object") {
        return String(obj).toLowerCase().includes(search);
    }

    return Object.values(obj).some(value => containsValue(value, search));
}

export default function Showdata({ jsonData }) {
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(10);

    const rows = Object.entries(jsonData || {});

    const filteredRows = search
        ? rows.filter(([key, value]) =>
              key.toLowerCase().includes(search.toLowerCase()) ||
              containsValue(value, search)
          )
        : rows;

    function handleScroll(e) {
        const { scrollTop, clientHeight, scrollHeight } = e.target;

        if (scrollTop + clientHeight >= scrollHeight - 100) {
            setVisibleCount(prev => Math.min(prev + 10, filteredRows.length));
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(10);
                }}
            />

            <div
                style={{ height: "1000px", overflowY: "auto" }}
                onScroll={handleScroll}
            >
                {filteredRows.slice(0, visibleCount).map(([index, object]) => (
                    <div key={index}>
                        <h3>{index}</h3>
                        <ShowObject data={object} />
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}