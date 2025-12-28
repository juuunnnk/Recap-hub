import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DetailModal = ({ service, onClose }) => {
    const { language, t } = useLanguage();
    if (!service) return null;

    const content = service.content[language];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 'var(--spacing-sm)'
        }} onClick={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="animate-fade-in"
                style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    border: '1px solid var(--border-color)',
                    position: 'relative'
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        fontSize: '1.2rem',
                        lineHeight: 1
                    }}
                >
                    ×
                </button>

                <div style={{ height: '200px' }}>
                    <img src={service.imageUrl} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ padding: 'var(--spacing-md)' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.25rem' }}>{service.name}</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>{service.provider}</p>

                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                        {t('modal.openService')}
                    </a>

                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{t('modal.whatsInside')}</h3>
                        <ul style={{ listStyle: 'none' }}>
                            {content.features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: 'var(--text-accent)' }}>
                                    <span style={{ color: 'var(--accent-primary)' }}>•</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{t('modal.howToFind')}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            {content.guide}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;
