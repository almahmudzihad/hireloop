"use server"

import { revalidatePath } from "next/cache"
import { serverMutations } from "../api/core/server"





export const createCompany = async (newCompanyData) => {
    return serverMutations('api/companies', newCompanyData)
}
export const updateCompany = async (id, data) => {
    const res = serverMutations(`api/companies/${id}`, data , 'PATCH' )
    revalidatePath('/dashboard/admin/companies')
    return res
    
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