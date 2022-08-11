import Icon from '../assets/wallet.png';
import VideoImg from '../assets/desktop/Desktop video.svg';
import VideoImgMobile from '../assets/video.png';
import CardSecondary from './CardSecondary';

const HowToBuy = () => {
  return (
    <section className=''>
      <h2 className='text-center text-3xl font-bold text-white pb-12'>
        How to buy
      </h2>
      <div className='split flex flex-col justify-center items-center gap-28 lg:flex-row'>
        <div className='details-container  text-center lg:w-2/4'>
          {/* <div className='flex gap-3 py-5'>
            <figure className='w-64'>
              <img src={Icon} alt='wallet' />
            </figure>
            <p className='text-[.8rem] text-left'>
              Download MetaMask (a crypto wallet in form of a browser extension)
              or TrustWallet (an app for your phone). After that you will have
              to add the Binance Smart Chain to your network-list. (Click here
              for a step-by-step tutorial).
            </p>
          </div> */}
          <CardSecondary />
          <CardSecondary />
          <CardSecondary />
          <CardSecondary />
        </div>

        <div className='img-container'>
          <img src={VideoImgMobile} alt='/' />
        </div>
      </div>
    </section>
  );
};
export default HowToBuy;
