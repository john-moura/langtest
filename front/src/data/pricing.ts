import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basic',
        price: 0,
        features: [
            'Reading comprehension exercises',
            'Language building blocks',
            'Listening comprehension',
            '1 week of AI chat',
        ],
    },
    {
        name: '3 months Pro',
        price: 39,
        features: [
            'Unlimited AI chat',
            'Assessment of writing exercises',
            'Oral test',
            'Priority email support',
        ],
    },
    {
        name: '12 months Pro',
        price: 31,
        features: [
            '20% discount',
            'Chat support',
        ],
    },
]