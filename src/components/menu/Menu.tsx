import { Link } from "react-router-dom"
import "./menu.scss"

const Menu = () => {
    return(
        <div className="menu">
            <div className="item">
                <span className="title">MAIN FUNCTIONS</span>
                <Link to="/" className="listItem">
                <img src="/home.svg" alt="" />
                <span className="ListItemTitle">Home</span>
                </Link>
                <Link to="/" className="listItem">
                <img src="/profile.svg" alt="" />
                <span className="ListItemTitle">Profile</span>
                </Link>
            </div>
            <div className="item" >
                <span className="title">LISTS</span>
                <Link to="/" className="listItem">
                <img src="/user.svg" alt="" />
                <span className="ListItemTitle">Users</span>
                </Link>
                <Link to="/" className="listItem">
                <img src="post2.svg" alt="" />
                <span className="ListItemTitle">Posts</span>
                </Link>
            </div>
            <div className="item" >
                <span className="title">MAINTENANCE</span>
                <Link to="/announcement" className="listItem">
                <img src="/note.svg" alt="" />
                <span className="ListItemTitle">Announcement</span>
                </Link>
                <Link to="/report" className="listItem">
                <img src="/form.svg" alt="" />
                <span className="ListItemTitle">Reports</span>
                </Link>
                <Link to="/" className="listItem">
                <img src="/setting.svg" alt="" />
                <span className="ListItemTitle">Settings</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu