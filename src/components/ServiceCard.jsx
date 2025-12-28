import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ service, onClick }) => {
    const { language, t } = useLanguage();
    const [imageError, setImageError] = useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'var(--status-active)';
            case 'Coming Soon': return 'var(--status-soon)';
            case 'Ended': return 'var(--status-ended)';
            default: return 'var(--text-secondary)';
        }
    };

    const content = service.content[language];

    return (
        <div
            className="animate-fade-in"
            style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                cursor: 'pointer',
                position: 'relative'
            }}
            onClick={onClick}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{ position: 'relative', height: '160px', background: 'var(--bg-secondary)' }}>
                {!imageError && service.imageUrl ? (
                    <img
                        src={service.imageUrl}
                        alt={service.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)'
                    }}>
                        <span style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: 'var(--text-secondary)',
                            opacity: 0.5
                        }}>
                            {service.name}
                        </span>
                    </div>
                )}
                <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: getStatusColor(service.status),
                    border: `1px solid ${getStatusColor(service.status)}`
                }}>
                    {t(`status.${service.status}`)}
                </div>
            </div>

            <div style={{ padding: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{service.provider}</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{service.name}</h3>
                    </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {content.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', background: 'var(--bg-secondary)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-accent)' }}>
                        {t(`categories.${service.category}`)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
