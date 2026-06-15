"use server"

import { serverMutations } from "../api/core/server"

export const createSubscription = async (subInfo) => {
    return serverMutations('api/subscriptions', subInfo)
}