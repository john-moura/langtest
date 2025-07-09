import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} free?`,
        answer: 'Yes! You can benefit from more than 200 exercises and AI chat for free. If you want to have access to premium features, you can also use our paid plan',
    },
    {
        question: `For what levels can I use LangTest?`,
        answer: 'LangTest is ideal for A1 to B2 tests.',
    },
    {
        question: `Does ${siteDetails.siteName} provide a language proficiency certificate?`,
        answer: 'No. We don\'t provide any language proficiency certificates. We prepare you for Telc and Goethe tests.',
    },
    {
        question: 'Is there any way I can track my progress?',
        answer: `Yes! The continuosly shows your progress so you know where you started and where you are now.`
    },
    {
        question: 'Do I need to add my credit card details to use the app?',
        answer: 'Yes, a credit card is needed to subscribe. You will only be charged in case you want to proceed with the premium plan',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available via chat or email.'
    }
];