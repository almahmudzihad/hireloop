"use server"

import { serverMutations } from "../api/core/server"

export const submitApplications = async (applicationData) => {
    return serverMutations('api/applications', applicationData)
}