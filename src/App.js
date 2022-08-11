import './App.css';
import DashboardSection from './components/DashboardSection';
import Hero from './components/Hero';
import HowToBuy from './components/HowToBuy';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import Services from './components/Services';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='lg:w-[80%] mx-auto'>
        <Hero />
        <Services />
        <DashboardSection />
        <Roadmap />
        <Info />
        <HowToBuy />
      </main>
    </>
  );
}

export default App;

