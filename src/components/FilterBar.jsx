import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { categories } from '../data/services';

const FilterBar = ({ currentCategory, onCategoryChange }) => {
    const { t } = useLanguage();

    return (
        <div className="container" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {categories.map((cat) => {
                    const translationKey = `categories.${cat}`;
                    const translated = t(translationKey);
                    // If translation returns the key itself (default behavior of t()), use cat name instead
                    const label = translated === translationKey ? cat : translated;

                    return (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(cat)}
                            style={{
                                padding: '0.5rem 1.25rem',
                                borderRadius: 'var(--radius-full)',
                                background: currentCategory === cat ? 'var(--text-primary)' : 'var(--bg-card)',
                                color: currentCategory === cat ? 'var(--bg-primary)' : 'var(--text-secondary)',
                                border: '1px solid',
                                borderColor: currentCategory === cat ? 'var(--text-primary)' : 'var(--border-color)',
                                fontWeight: '500',
                                fontSize: '0.9rem',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterBar;
