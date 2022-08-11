// import Button from './Button';
import InfoImg from '../assets/mobile/info image.png';

const Info = () => {
  return (
    <section className='py-16'>
      <div className='split  flex flex-col justify-center items-center '>
        <div className='info flex flex-col text-center justify-center items-center gap-5 max-w-[40%] mx-auto'>
          <h2 className='text-white font-bold text-3xl pb-6'>$TIKI Info</h2>
          <p>Official Contract</p>
          <p className='text-sm'>0x9b76D1B12Ff738c113200EB043350022EBf12Ff0</p>
          <button className='btn btn-wide bg-white rounded-3xl text-black text-[1rem] font-bold'>
            Buy $Shibs
          </button>
          <button className='btn btn-wide bg-white rounded-3xl text-black text-[1rem] font-bold'>
            Buy $Shibs
          </button>
          <button className='btn btn-wide bg-white rounded-3xl text-black text-[1rem] font-bold'>
            Buy $Shibs
          </button>
        </div>
        <div className='img-container'>
          <img src={InfoImg} alt='/' />
        </div>
      </div>
    </section>
  );
};
export default Info;
