import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <header style={{ padding: 'var(--spacing-md) 0', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--accent-gradient)', borderRadius: '6px' }}></div>
                    <span style={{ fontWeight: '700', fontSize: '1.25rem' }}>{t('siteTitle')}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-card)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                        <button
                            onClick={() => setLanguage('ja')}
                            style={{
                                padding: '4px 12px',
                                borderRadius: 'var(--radius-full)',
                                background: language === 'ja' ? 'var(--bg-secondary)' : 'transparent',
                                color: language === 'ja' ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontSize: '0.8rem',
                                fontWeight: '600'
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
                                fontWeight: '600'
                            }}
                        >
                            EN
                        </button>
                    </div>
                    <button className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                        {t('share')}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
