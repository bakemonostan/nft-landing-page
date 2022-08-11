import Card from './Card';

const Services = () => {
  return (
    <section>
      <h2 className='text-center text-white text-3xl uppercase font-bold pb-9'>
        Big Vision, Great Features
      </h2>
      <div className='card-container flex flex-col gap-4 justify-center items-center lg:flex-row lg: flex-wrap mx-auto'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
export default Services;
