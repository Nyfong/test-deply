let Button1 = (props) => {
  return (
    <div>
      <a
        className="block w-full rounded bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        href="#"
      >
        {props.title ? props.title : "default"}
      </a>
    </div>
  );
};

export default Button1;
