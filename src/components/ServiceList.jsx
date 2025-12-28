import React from 'react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../context/LanguageContext';

const ServiceList = ({ services, onCardClick }) => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}
            >
                {services.map(service => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onClick={() => onCardClick(service)}
                    />
                ))}
                {services.length === 0 && (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                        {t('emptyState')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceList;
