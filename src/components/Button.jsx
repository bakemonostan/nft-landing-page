const Button = ({ icon, info, btnColor, color, border }) => {
  return (
    <button
      className={`${btnColor} ${color} ${border} rounded-[50px] mx-auto uppercase font-bold flex lg:w-[320px] lg:mx-0 items-center gap-4 mb-5 py-3 px-6 `}
    >
      <img src={icon} alt='button icon' />
      <p className=''>{info}</p>
    </button>
  );
};
export default Button;
