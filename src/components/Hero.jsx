import HeroImg from '../assets/heroimg.svg';
import Bunny from '../assets/bunny-svg.svg';
import Chart from '../assets/chart.svg';
import Button from './Button';
import BscScan from '../assets/mobile/bsc.png';
import CoinCap from '../assets/mobile/coin-market-cap.png';
import CoinGecko from '../assets/mobile/coin-gecko.png';

const Hero = () => {
  const mobileSponsors = [BscScan, CoinCap, CoinGecko];

  return (
    <section className='text-center mx-auto flex flex-col justify-center items-center max-w-[350px]'>
      <div>
        <img src={HeroImg} alt='/' className='' />
      </div>
      <div>
        <div>
          <h1 className='text-4xl uppercase text-white font-bold py-4 leading-normal'>
            Hold <span className='text-[#EF7542]'>$SHIBS,</span> earn bnb
          </h1>
          <p className='mb-[4rem] text-[.8rem] max-w-[300px] mx-auto'>
            The first SHIB reflection token and the first with auto-claim
            feature. Simply hold $SHIBS tokens in your wallet and you'll earn
            SHIB.
          </p>
        </div>
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
      <div className='flex flex-col py-[6rem] md:flex-row'>
        {mobileSponsors.map((img) => {
          return <img src={img} alt='/' className='mb-9 w-[130px]' />;
        })}
      </div>
    </section>
  );
};
export default Hero;
