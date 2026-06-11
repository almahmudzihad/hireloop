"use server"

import { serverMutations } from "../api/core/server"





export const createCompany = async (newCompanyData) => {
    return serverMutations('api/companies', newCompanyData)
}
// Fallback to localhost if the env variable isn't picking up on the server side
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createCompany = async (newCompanyData) => {
//     const res = await fetch(`${baseUrl}/api/companies`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newCompanyData),
//         });

//     return await res.json();
// }