import './App.css';
import DashboardSection from './components/DashboardSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
      </main>
    </>
  );
}

export default App;

