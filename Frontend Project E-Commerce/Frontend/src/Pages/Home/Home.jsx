import NewArrival from './Components/NewArrival.jsx';
import Services from '.././About/Components/Services.jsx';
import CategorySection from './Components/CategorySection.jsx';
import MusicExperience from './Components/MusicExperience.jsx';
import AppleCarousel from './Components/AppleCarousel.jsx';
import Products from './Components/Products.jsx';
import SomeProducts from './Components/OverFlowProducts.jsx';
function Home() {
  return (
    <>
      <AppleCarousel />
      <SomeProducts />
      <CategorySection />
      <MusicExperience />
      <Products />
      <NewArrival />
      <Services />
    </>
  );
}

export default Home;
