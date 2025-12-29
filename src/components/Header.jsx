import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();

    const handleShare = async () => {
        const shareData = {
            title: t('siteTitle'),
            text: t('heroTitle'),
            url: window.location.origin + window.location.pathname
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(shareData.url);
                alert('URL copied to clipboard!');
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <header className="site-header">
            <div className="container header-container">
                <div className="site-logo">
                    <div className="site-logo-icon" style={{ borderRadius: '6px' }}></div>
                    <span className="site-title">{t('siteTitle')}</span>
                </div>
                <div className="header-actions">
                    <div className="lang-switcher" style={{ display: 'flex', gap: '0.25rem', background: 'var(--bg-card)', padding: '3px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                        <button
                            onClick={() => setLanguage('ja')}
                            style={{
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-full)',
                                background: language === 'ja' ? 'var(--bg-secondary)' : 'transparent',
                                color: language === 'ja' ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}
                        >
                            JA
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            style={{
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-full)',
                                background: language === 'en' ? 'var(--bg-secondary)' : 'transparent',
                                color: language === 'en' ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}
                        >
                            EN
                        </button>
                    </div>
                    <button
                        className="btn btn-secondary btn-share"
                        style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                        onClick={handleShare}
                    >
                        {t('share')}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
