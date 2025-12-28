import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ count }) => {
    const { t } = useLanguage();

    return (
        <section style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <h1 className="gradient-text animate-fade-in" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: 'var(--spacing-sm)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                    {t('heroTitle')}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                    {t('heroSubtitle').replace('{count}', count)}
                </p>
            </div>
        </section>
    );
};

export default Hero;
