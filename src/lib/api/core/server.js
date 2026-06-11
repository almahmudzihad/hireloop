

// Fallback to localhost if the env variable isn't picking up on the server side
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverMutations = async (path, data) => {
    const res = await fetch(`${baseUrl}/${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

    return await res.json();
}