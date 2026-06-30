import { protectedFetch, serverFetch } from "./core/server";

export const getApplicationsByApplicant = (applicantId) => {
    return serverFetch(`api/applications?applicantId=${applicantId}`);
}