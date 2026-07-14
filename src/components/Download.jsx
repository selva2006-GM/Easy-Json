
import QRCode from "react-qr-code";


export default function Download(props){

    function removeIndex(data) {
        if (Array.isArray(data)) {
            return data.map(removeIndex);
        }
    
        if (data !== null && typeof data === "object") {
    
            const keys = Object.keys(data);
    
            // Check if every key is a number: "0", "1", "2", ...
            const isIndexedObject = keys.every((key, index) => key === String(index));
    
            if (isIndexedObject) {
                return keys.map(key => removeIndex(data[key]));
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
    return(
        <div className="overlay">
        <div className="popup">

            

            <h2>❤️ Support Easy JSON</h2>

            <p>
                If this project helped you, consider supporting its
                development.
            </p>

            <img
                src="../../public/upi.png"
                alt="UPI"
                width="120"
                style={{ marginBottom: "15px" }}
            />

            <p>
                <b>UPI ID:</b> selvaganesh.s9629@oksbi
            </p>

            <button
                onClick={() =>
                    navigator.clipboard.writeText(
                        "selvaganesh.s9629@oksbi"
                    )
                }
            >
                Copy UPI ID
            </button>

            <button onClick={startDownload}>
                Continue Download
            </button>

            <button onClick={() => props.setShowDonate(false)}>
                Cancel
            </button>
        </div>
    </div>
)
}