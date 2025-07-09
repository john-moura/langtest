import { FiAward, FiBarChart2, FiBriefcase, FiClock, FiDollarSign, FiEdit3, FiEye, FiFastForward, FiLock, FiMap, FiMic, FiPieChart, FiRefreshCcw, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"
import { FcApproval } from "react-icons/fc";

export const benefits: IBenefit[] = [
    {
        title: "Personalized plan",
        description: "Our app assess your proficiency level and prioritizes potential gaps",
        bullets: [
            {
                title: "Intelligent exercise choices",
                description: "We automatically adjust the content for your real needs",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Clear goals",
                description: "Targets are set to make you successful in your test",
                icon: <FiTarget size={26} />
            },
            {
                title: "Spaced repetition",
                description: "Every now and then the app brings back some concepts so you can remain sharp",
                icon: <FiRefreshCcw size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Instant feedback",
        description: "We guide you through what you need to learn to be successful in your language test",
        bullets: [
            {
                title: "Learning plan constantly adjusted based on your needs",
                description: "Learn what you need to learn, reinforce what must be reinforced",
                icon: <FiMap size={26} />
            },
            {
                title: "Expert AI",
                description: "Trained to guide you by the hand to your certificate",
                icon: <FiAward size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track your progress and you will know when you are ready for your test.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Effective exercises",
        description: "Our exercises are based on the real tests, so you know what to expect",
        bullets: [
            {
                title: "Write",
                description: "Our app provides feedback on your texts to ensure you are prepared for the written test",
                icon: <FiEdit3 size={26} />
            },
            {
                title: "Read and Listen",
                description: "You can test your reading and listening comprehension",
                icon: <FiFastForward size={26} />
            },
            {
                title: "Speak",
                description: "Chat with our AI and receive instant feedback on your speaking skills and how they would perform on the real test",
                icon: <FiMic size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]