const Button = ({ icon, info, btnColor, color, border }) => {
  return (
    <button
      className={`${btnColor} ${color} ${border} rounded-[50px] uppercase font-bold flex mx-auto justify-center items-center gap-4 mb-5 py-3 px-6 lg:mx-0`}
    >
      <img src={icon} alt='button icon' />
      <p className=''>{info}</p>
    </button>
  );
};
export default Button;
