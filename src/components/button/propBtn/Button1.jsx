let Button1 = (props) => {
  return (
    <>
      <button className="px-6 py-3.5 text-lg leading-tight text-white bg-amber-500 rounded-full">
        {props.title ? props.title : "default"}
      </button>
    </>
  );
};

export default Button1;
