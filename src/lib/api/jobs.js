import { serverFetch } from "./core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getCompanyJobs = async (companyId, status = "active") => {
    const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return await res.json();
}
export const getJobs = () => serverFetch("api/jobs");
export const getJobById = (jobId) => serverFetch(`api/jobs/${jobId}`);