'use client';

import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

import { logOut } from '@/api/auth';
import { message } from 'antd';

const Footer: React.FC = () => {
    const exit = () => {
    try {
      logOut();
    window.location.href = '/';
  
    } catch (err: unknown) {
      const error = err as Error;
      message.error(error.message);
    }
  };

    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        {/*<FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
                        <img className="text-foreground min-w-fit w-7 h-7" src="images/Globe.png"></img>
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`}  className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">Phone: {footerDetails.telephone}</a>}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">Made with &hearts; in Berlin</p>
            </div>
            <a onClick={exit} className="relative top-0 right-0 text-black rounded">Logout</a>
        </footer>
    );
};

export default Footer;
