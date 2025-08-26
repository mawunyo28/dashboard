const Button = ({ className, children }) => {
  return <button className={`text-[1.5rem] bg-button-colour  px-8 py-1 text-white  rounded-full shadow-lg cursor-pointer ${className}`}>
    {children}
  </button>;
};


export default Button;

