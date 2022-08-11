import Button from './Button';
import Chart from '../assets/chart.svg';
import DashBoard from '../assets/mobile/dashboard-image.png';
import DesktopDashBoard from '../assets/desktop/Mask Group.png';

const DashboardSection = () => {
  return (
    <div class='hero pt-[6rem]'>
      <div class='hero-content text-center'>
        <div class='mx-auto flex flex-col justify-center items-center'>
          <h1 class='text-4xl font-bold uppercase text-white'>
            {' '}
            view your <br /> <span className='text-[#EF7542]'>$SHIB</span>{' '}
            earnings.
          </h1>
          <p class='pt-6 pb-8 px-2 text-[.8rem] mx-auto max-w-sm lg:text-[1rem] lg:max-w-lg'>
            While you're holding $TIKI tokens, you're earning BNB. You can keep
            track of how much you earned so far and when is the next payout from
            your dashboard. Everything is updated real-time.
          </p>
          <Button
            icon={Chart}
            info='launch dashboard'
            btnColor='bg-transparent'
            border='border-[1px] border-[#57B8FF]'
            className='w-8'
          />
          <img src={DashBoard} alt='/' className='lg:hidden' />
          <img
            src={DesktopDashBoard}
            alt='/'
            className='hidden lg:block py-28'
          />
        </div>
      </div>
    </div>
  );
};
export default DashboardSection;
