function ShowObject({ data }) {
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
}

export default function Showdata({ jsonData }) {
    return <ShowObject data={jsonData} />;
}