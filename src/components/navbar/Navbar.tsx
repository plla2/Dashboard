import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="로고이미지" />
        <span>Plla2 Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="검색" className="icon" />
        <img src="/app.svg" alt="앱" className="icon" />
        <img src="/expand.svg" alt="확장" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/man.png" alt="" />
          <span>plla2</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
