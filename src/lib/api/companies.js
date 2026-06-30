import { protectedFetch, serverFetch } from "./core/server"


export const getRecruiterCompanies = (recruiterId) => {
    return serverFetch(`api/my/companies?recruiterId=${recruiterId}`);
}
export const getCompanies = async () => protectedFetch(`api/companies/`);