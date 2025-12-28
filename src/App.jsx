import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ServiceList from './components/ServiceList';
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';
import { services as allServices } from './data/services';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      if (selectedCategory === 'All') return true;
      return service.category === selectedCategory;
    });
  }, [selectedCategory]);

  const activeCount = allServices.filter(s => s.status === 'Active' || s.status === 'Coming Soon').length;

  return (
    <LanguageProvider>
      <div className="app">
        <Header />

        <main>
          <Hero count={activeCount} />

          <FilterBar
            currentCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ServiceList
            services={filteredServices}
            onCardClick={setSelectedService}
          />
        </main>

        <Footer />

        {selectedService && (
          <DetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
