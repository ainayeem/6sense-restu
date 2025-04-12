import logoIcon from "../../assets/images/logo-icon.png";
const Nav = () => {
  const navValue = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Clients</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="xl:max-w-screen-xl xl:mx-auto">
      <div className="">
        <div className="navbar fixed z-10 bg-opacity-30 xl:max-w-screen-xl text-white ml-8 xl:ml-0">
          <div className="xl:navbar-start">
            <img src={logoIcon} alt="" />
            <a className="ml-2 text-xl roboto">Restuarent</a>
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1 roboto">{navValue}</ul>
            </div>
          </div>

          <div className="navbar-end hidden xl:flex">
            <button className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none roboto">
              BOOK A TABLE
            </button>
          </div>

          <div className="navbar-end lg:hidden">
            <div className="dropdown w-full z-50">
              <div className="flex justify-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
              </div>
              <div className="mr-4 z-20">
                <ul
                  tabIndex={0}
                  className="menu dropdown-content  rounded z-[1] mt-3  shadow text-white bg-red-300 bg-opacity-30 backdrop-blur-md roboto w-56"
                >
                  {navValue}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
