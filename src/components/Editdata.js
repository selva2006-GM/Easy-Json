import { useEffect, useState } from "react";

export default function Editdata({ jsonData, setJsonData }) {
    const [text, setText] = useState("");

    useEffect(() => {
        setText(JSON.stringify(jsonData, null, 4));
    }, [jsonData]);

    function save() {
        try {
            const parsed = JSON.parse(text);
            setJsonData(parsed);
            alert("Saved!");
        } catch {
            alert("Invalid JSON");
        }
    }

    return (
        <>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    width: "100%",
                    height: "80vh",
                    fontFamily: "monospace",
                    fontSize: "16px"
                }}
            />

            <button onClick={save}>Save</button>
        </>
    );
}