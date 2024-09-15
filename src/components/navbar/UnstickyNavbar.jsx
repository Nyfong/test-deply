export default function UnstickyNavbar() {
  return (
    <div>
      <header className="grid grid-cols-1 md:grid-cols-3 bg-amber-500 p-3">
        <div className="hidden md:grid"></div>
        <div className="grid place-content-center ">
          <div className="flex gap-3 items-center">
            <i className="fa-brands fa-telegram text-white"></i>
            <p className="text-white">
              Join our community, Support and Connect
            </p>
          </div>
        </div>
        <div></div>
      </header>
    </div>
  );
}
