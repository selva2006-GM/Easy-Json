import QRCode from "react-qr-code";

export default function Download(props) {
    function removeIndex(data) {
        if (Array.isArray(data)) {
            return data.map(removeIndex);
        }

        if (data !== null && typeof data === "object") {
            const keys = Object.keys(data);

            const isIndexedObject = keys.every(
                (key, index) => key === String(index)
            );

            if (isIndexedObject) {
                return keys.map((key) => removeIndex(data[key]));
            }

            const result = {};

            for (const key in data) {
                result[key] = removeIndex(data[key]);
            }

            return result;
        }

        return data;
    }

    function startDownload() {
        const originalJson = removeIndex(props.jsonData);

        const jsonString = JSON.stringify(originalJson, null, 4);

        const blob = new Blob([jsonString], {
            type: "application/json",
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;

        const fileName = prompt("Enter file name:", "data");
        a.download = fileName ? `${fileName}.json` : "data.json";

        a.click();

        URL.revokeObjectURL(url);

        props.setShowDonate(false);
    }

    function copyUPI() {
        navigator.clipboard.writeText("selvaganesh.s9629@oksbi");
        alert("UPI ID copied!");
    }

    return (
        <div className="overlay">
            <div className="popup">
                <h2>❤️ Support Easy JSON</h2>

                <p>
                    If Easy JSON helped you, consider supporting its
                    development.
                </p>

                <div
                    style={{
                        background: "#fff",
                        padding: "12px",
                        display: "inline-block",
                        borderRadius: "10px",
                        margin: "20px 0",
                    }}
                >
                    <QRCode
                    value="upi://pay?pa=selvaganesh.s9629@oksbi&pn=Selva%20Ganesh&am=10&cu=INR"
                    size={180}
                />
                </div>

                {/* <p>
                    <b>UPI ID</b>
                </p>

                <p>selvaganesh.s9629@oksbi</p>

                <button onClick={copyUPI}>
                    Copy UPI ID
                </button> */}

                <br />
                <br />
                <div className="buttons">
   
    <button
        onClick={() =>
            window.open("https://selvacodes.online", "_blank")
        }
    >
         Know Me
    </button>

    <button onClick={startDownload}>
        Continue Download
    </button>

    <button onClick={() => props.setShowDonate(false)}>
        Cancel
    </button>
</div>
            </div>
        </div>
    );
}