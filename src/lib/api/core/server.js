import { getUserToken } from "./session";


// Fallback to localhost if the env variable isn't picking up on the server side
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



export const authHeaders = async () => {
    const token = await getUserToken();
    //return { Authorization: `Bearer ${token}` };
    const header = token ? { Authorization: `Bearer ${token}` } : {};
    return header
}
export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}/${path}`);
    return await res.json();
}
export const protectedFetch = async (path) => {
    const res = await fetch(`${baseUrl}/${path}`, {
        headers: await authHeaders()
    });
    return await res.json();
}
export const serverMutations = async (path, data, method = "POST") => {
    const res = await fetch(`${baseUrl}/${path}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                ...await authHeaders()
            },
            body: JSON.stringify(data),
        });

    return await res.json();
}