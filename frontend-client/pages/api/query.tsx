import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { query } = req.body;
        const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000/query";

        const response = await axios.post(backendURL, { query });
        return res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return res.status(500).json({ error: "Failed to fetch response" });
    }
}
