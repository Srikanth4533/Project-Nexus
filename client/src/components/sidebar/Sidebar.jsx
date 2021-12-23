import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
    
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories");
            setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT THE AUTHOR</span>
                <img
                    src="https://avatars.githubusercontent.com/u/37930821?v=4"
                    alt=""
                />
                <p>
                    I'm Vineeth, a Computer Science undergraduate from BMS College of Engineering.
                    I am a full stack developer, security analyst and pentration tester.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    { cats.map((c) => (
                        <Link key={ c._id } to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">
                                { c.name }
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                    <div className="sidebarSocial">
                        <a href="https://www.facebook.com/vineeth.bv.12"
                        rel="noreferrer"
                        target="_blank"
                        className="link"
                    >
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/vins._.dragonis/"
                        rel="noreferrer"
                        target="_blank"
                        className="link"
                    >
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </a>
                    <a href="https://github.com/vinsdragonis"
                        rel="noreferrer"
                        target="_blank"
                        className="link"
                    >
                        <i className="sidebarIcon fab fa-github-square"></i>
                    </a>
                    <a href="https://www.reddit.com/user/KingDragonis"
                        rel="noreferrer"
                        target="_blank"
                        className="link"
                    >
                        <i className="sidebarIcon fab fa-reddit-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}