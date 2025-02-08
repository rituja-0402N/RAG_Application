import React, { useState } from "react";
import styles from "./Frontpage.module.css";



const Frontpage: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSend = async () => {
        if (query.trim() == "") return;
        setLoading(true);

        try {
            const res = await fetch("http://localhost:8000/query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });

            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.log("Error fetching the resposne: ", error);
            setResponse("Error: Unable to fetch a response.");
        }
        setLoading(false);
    };
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.heading} >AI Chat</h2>
                <textarea
                    className={styles.textarea}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask something..."
                    rows={4}

                />
                <button onClick={handleSend} disabled={loading} className={styles.button}>
                    {loading ? "Thinking..." : "Send"}
                </button>
                {response && (
                    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
                        <strong>Response:</strong>
                        <p>{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Frontpage;