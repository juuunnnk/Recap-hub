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

    const getServiceTheme = (id) => {
        const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const gradients = [
            'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
            'linear-gradient(135deg, #A8E6CF 0%, #DCEDC1 100%)',
            'linear-gradient(135deg, #FFD3B6 0%, #FFAAA5 100%)',
            'linear-gradient(135deg, #845EC2 0%, #D65DB1 100%)',
            'linear-gradient(135deg, #4B4453 0%, #B0A8B9 100%)',
            'linear-gradient(135deg, #00C9A7 0%, #92E3A9 100%)',
            'linear-gradient(135deg, #C193FB 0%, #FFCCFF 100%)',
            'linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)',
            'linear-gradient(135deg, #614385 0%, #516395 100%)',
            'linear-gradient(135deg, #02aab0 0%, #00cdac 100%)'
        ];
        return gradients[hash % gradients.length];
    };

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
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
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
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem',
                        textAlign: 'center',
                        background: getServiceTheme(service.id),
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-10%',
                            right: '-10%',
                            fontSize: '4rem',
                            fontWeight: '900',
                            color: 'rgba(255, 255, 255, 0.1)',
                            userSelect: 'none',
                            pointerEvents: 'none',
                            whiteSpace: 'nowrap',
                            transform: 'rotate(-15deg)'
                        }}>
                            {service.provider}
                        </div>
                        <span style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            color: '#fff',
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            letterSpacing: '-0.02em',
                            position: 'relative',
                            zIndex: 1,
                            lineHeight: 1.2
                        }}>
                            {service.name}
                        </span>
                        <div style={{
                            marginTop: '0.5rem',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: 'rgba(255, 255, 255, 0.9)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {service.provider}
                        </div>
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
