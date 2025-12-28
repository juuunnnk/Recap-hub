import Papa from 'papaparse';
import csvData from './services.csv?raw';

const parseServices = (csvText) => {
    const result = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true
    });

    return result.data.map(row => ({
        id: row.id,
        name: row.name,
        provider: row.provider,
        category: row.category,
        status: row.status,
        imageUrl: row.imageUrl,
        link: row.link,
        content: {
            en: {
                description: row.desc_en,
                features: row.features_en ? row.features_en.split('|') : [],
                guide: row.guide_en
            },
            ja: {
                description: row.desc_ja,
                features: row.features_ja ? row.features_ja.split('|') : [],
                guide: row.guide_ja
            }
        }
    }));
};

export const services = parseServices(csvData);

// Extract unique categories from services
const uniqueCategories = [...new Set(services.map(s => s.category))];
export const categories = ['All', ...uniqueCategories];
