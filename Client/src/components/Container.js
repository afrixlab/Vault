const Container = ({ children, className }) => {
  return (
    <div
      className={`px-2 md:px-8 w-[95%] md:w-[90%] lg:w-[70%] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
