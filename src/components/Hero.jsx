import HeroImg from '../assets/heroimg.svg';
import HeroDesktop from '../assets/desktop/desktop-hero.png';
import Bunny from '../assets/bunny-svg.svg';
import Chart from '../assets/chart.svg';
import Button from './Button';
import BscScan from '../assets/mobile/bsc.png';
import CoinCap from '../assets/mobile/coin-market-cap.png';
import CoinGecko from '../assets/mobile/coin-gecko.png';
import DeskBscScan from '../assets/desktop/bscscan.png';
import DeskCoinCap from '../assets/desktop/coinmarker.png';
import DeskCoinGecko from '../assets/desktop/coingecko.png';
import DeskTechRate from '../assets/desktop/TechRate 1.png';

const Hero = () => {
  const mobileSponsors = [BscScan, CoinCap, CoinGecko];
  const desktopSponsors = [
    DeskBscScan,
    DeskCoinCap,
    DeskCoinGecko,
    DeskTechRate,
  ];

  return (
    <section className='p-5 lg:pt-8 '>
      <div className='split flex flex-col gap-9 justify-center items-center max-w-[350px] mx-auto lg:flex-row-reverse md:max-w-[1040px] 2xl:max-w-[1400px]'>
        <div className='img-container'>
          <img src={HeroImg} alt='/' className='lg:hidden' />
          <img src={HeroDesktop} alt='/' className='hidden lg:block' />
        </div>
        <div className='details text-center lg:text-left px-4 lg:pt-16 lg:max-w-[500px] 2xl:max-w-[1000px]'>
          <h1 className='text-white uppercase font-bold text-3xl py-4 lg:text-5xl lg:'>
            hold <span className='text-[#EF7542]'>$SHIBS,</span> earn bnb.
          </h1>

          <p className='text-sm text-white py-4 md:text-[1.1rem]'>
            The first SHIB reflection token and the first with auto-claim
            feature. Simply hold $SHIBS tokens in your wallet and you'll earn
            SHIB.
          </p>
          <div className='py-8 flex flex-col justify-center items-start'>
            <Button
              icon={Bunny}
              info='buy on pancakeswap'
              btnColor='bg-[#F9A13F]'
              color='text-black'
            />
            <Button
              icon={Chart}
              info='launch dashboard'
              btnColor='bg-transparent'
              border='border-[1px] border-[#57B8FF]'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center py-[6rem] lg:flex-row'>
        {mobileSponsors.map((img) => {
          return <img src={img} alt='/' className='mb-9 w-[130px] lg:hidden' />;
        })}
        {desktopSponsors.map((img) => {
          return (
            <img src={img} alt='/' className='mx-6 mb-9 hidden lg:block' />
          );
        })}
      </div>
    </section>
  );
};
export default Hero;
