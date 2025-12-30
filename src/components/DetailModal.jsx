import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DetailModal = ({ service, onClose }) => {
    const { language, t } = useLanguage();
    if (!service) return null;

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

    const [imageError, setImageError] = React.useState(false);

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
                    position: 'relative',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
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
                        background: 'rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(4px)',
                        color: 'white',
                        fontSize: '1.2rem',
                        lineHeight: 1,
                        zIndex: 10,
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}
                >
                    ×
                </button>

                <div style={{ height: '240px', position: 'relative' }}>
                    {!imageError && service.imageUrl ? (
                        <img src={service.imageUrl} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setImageError(true)} />
                    ) : (
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            textAlign: 'center',
                            background: getServiceTheme(service.id),
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-5%',
                                right: '-5%',
                                fontSize: '6rem',
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
                                fontSize: '2rem',
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
                                marginTop: '1rem',
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: 'rgba(255, 255, 255, 0.9)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {service.provider}
                            </div>
                        </div>
                    )}
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
