import RoadmapCard from './RoadmapCard';

const Roadmap = () => {
  return (
    <section className='w-full'>
      <h2 className='text-white text-center text-2xl uppercase font-bold py-12'>
        Our Roadmap
      </h2>
      <div className='flex flex-col items-center justify-center py-8 gap-5 lg:flex-row'>
        <RoadmapCard />
        <RoadmapCard />
        <RoadmapCard />
      </div>
    </section>
  );
};
export default Roadmap;
