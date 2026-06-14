import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    recruiter_enterprise: 'price_1TiCyyHlo5RQ1AAzn6TExQHo',
    recruiter_growth: 'price_1TiCzlHlo5RQ1AAzY6r0hgEI',
    seeker_premium: 'price_1TiCxtHlo5RQ1AAztubvkrrm',
    seeker_pro: 'price_1TiA1XHlo5RQ1AAznVp1KnOL',
}