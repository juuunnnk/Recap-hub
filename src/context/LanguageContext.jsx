import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ja'); // Default to Japanese

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    // Update Meta Information
    useEffect(() => {
        const title = t('siteTitle');
        const description = t('metaDescription');

        document.title = title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }

        // Also update OGP tags if they exist for consistency
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);

        const twitterDesc = document.querySelector('meta[property="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute('content', description);
    }, [language]);

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
