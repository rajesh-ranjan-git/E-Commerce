let Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">GetKart</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Cart</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Theme</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
