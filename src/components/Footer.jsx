import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-xl) 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t('siteTitle')}</p>
                <p style={{ fontSize: '0.875rem', color: '#555' }}>
                    {t('footer.disclaimer')}
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <a href="https://github.com/juuunnnk/Recap-hub" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>{t('footer.submit')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
