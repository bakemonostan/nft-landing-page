import Icon from '../assets/wallet.png';

const CardSecondary = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 max-w-[300px] gap-3 lg:flex-row lg:max-w-[500px]'>
      <figure className='py-5 lg:w-72 lg:py-0'>
        <img src={Icon} alt='wallet' />
      </figure>
      <p className='text-[.8rem] lg:text-left'>
        Download MetaMask (a crypto wallet in form of a browser extension) or
        TrustWallet (an app for your phone). After that you will have to add the
        Binance Smart Chain to your network-list. (Click here for a step-by-step
        tutorial).
      </p>
    </div>
  );
};
export default CardSecondary;
