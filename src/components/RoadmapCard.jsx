import Check from '../assets/check.svg';

const RoadmapCard = () => {
  const goals = [
    'Techrate contract audit',
    'Fair-launch & Liquidity locked',
    'CoinMarketCap listing',
    'Launch earnings dashboard',
    'Launch Poocoin + Coinzilla ads',
    'Twitter & YouTube collabs',
    '$5,000,000 market-cap',
    '5,000 holders',
  ];

  return (
    <div className='pt-3 card max-w-[320px] shadow-xl bg-[#151429] text-center'>
      <div className='card-body'>
        <h2 className='card-title text-white text-2xl capitalize pb-8'>
          Phase 1 - Getting started
        </h2>
        {goals.map((goal, index) => {
          return (
            <p className='flex text-left items-center gap-3 py-1' key={index}>
              <span>
                <img src={Check} alt='' />
              </span>
              {goal}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default RoadmapCard;
