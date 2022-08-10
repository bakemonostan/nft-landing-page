const Button = ({ icon, info, btnColor, color, border }) => {
  return (
    <button
      className={`${btnColor} ${color} ${border} rounded-[50px] uppercase font-bold flex m-auto  items-center w-[90%] gap-4 mb-5 py-3 px-6`}
    >
      <img src={icon} alt='button icon' />
      <p>{info}</p>
    </button>
  );
};
export default Button;
