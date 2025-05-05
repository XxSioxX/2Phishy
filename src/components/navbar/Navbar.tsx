import "./navbar.scss";
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="/logo1.png" alt="" />
                <span>2Phishy</span>
                </div>
                 <div className="icons">
                    <img src="/search.svg" className="icon" />
                    <img src="/app.svg" className="icon" />
                    <img src="/expand.svg" className="icon" />
                    <div className="notification">
                        <img src="/notifications.svg" className="icon" />
                        <span>1</span>
                    </div>
                    <div className="user">
                        <img src="user.svg" alt="" />
                        <span>Andre</span>
                    </div>
                    <img src="/settings.svg" alt="" className="icon" />
                 </div>
                </div>
    );
};

export default Navbar;