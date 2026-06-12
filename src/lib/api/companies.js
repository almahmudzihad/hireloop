import { serverFetch } from "./core/server"


export const getRecruiterCompanies = (recruiterId) => {
    return serverFetch(`api/my/companies?recruiterId=${recruiterId}`);
}