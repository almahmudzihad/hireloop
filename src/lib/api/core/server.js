

// Fallback to localhost if the env variable isn't picking up on the server side
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;




export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}/${path}`);
    return await res.json();
}
export const serverMutations = async (path, data, method = "POST") => {
    const res = await fetch(`${baseUrl}/${path}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

    return await res.json();
}