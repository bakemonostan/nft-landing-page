import CardImg1 from '../assets/mobile/redistribution.png';

const Card = () => {
  return (
    <div className='pt-3 card max-w-[320px] shadow-xl bg-[#181734] text-center'>
      <figure>
        <img src={CardImg1} alt='Shoes' className='py-3' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-white text-2xl'>
          10% Redistribution In SHIB
        </h2>
        <p>
          10% of every buy/sell is taken and redistributed to all TIKI holders.
          Hold TIKI tokens, earn SHIB. <br /> Minimum 10,000 tokens{' '}
        </p>
      </div>
    </div>
  );
};
export default Card;
