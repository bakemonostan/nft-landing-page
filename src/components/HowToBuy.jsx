import VideoImg from '../assets/desktop/Desktop video.svg';
import VideoImgMobile from '../assets/video.png';
import CardSecondary from './CardSecondary';

const HowToBuy = () => {
  return (
    <section className=''>
      <h2 className='text-center text-3xl font-bold text-white pb-12'>
        How to buy
      </h2>
      <div className='split flex flex-col justify-center items-center gap-28 lg:flex-row lg:gap-2'>
        <div className='details-container  text-center lg:w-2/4'>
          <CardSecondary />
          <CardSecondary />
          <CardSecondary />
          <CardSecondary />
        </div>

        <div className='img-container'>
          <img src={VideoImgMobile} alt='/' className='lg:hidden' />
          <img src={VideoImg} alt='/' className='hidden lg:block' />
        </div>
      </div>
    </section>
  );
};
export default HowToBuy;
