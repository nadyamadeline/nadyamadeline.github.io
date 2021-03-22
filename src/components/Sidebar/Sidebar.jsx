import React from "react";
import "./Sidebar.scss";
import { AiFillGithub, AiFillPhone, AiFillGitlab } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="https://wa.me/6281234525590">
            <AiFillPhone className="sidebar-btn" />
          </a>
        </li>
        <li>
          <a href="mailto:nadyamadeline@gmail.com">
            <MdEmail className="sidebar-btn" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/nadyaafandi">
            <FaLinkedinIn className="sidebar-btn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/nadyamadeline">
            <AiFillGithub className="sidebar-btn" />
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/nadyamadeline">
            <AiFillGitlab className="sidebar-btn" />
          </a>
        </li>
      </ul>
      <div className="sidebar-line"></div>
    </div>
  );
}

export default Sidebar;
