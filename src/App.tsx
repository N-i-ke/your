// App.tsx
import Header from './components/Header';
import MainSection from './components/MainSection';
import PriceSection from './components/PriceSection';
import FeatureSection from './components/FeatureSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './reset.css';
import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <MainSection/>
      <FeatureSection/>
      <PriceSection />
      <FAQSection/>
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
