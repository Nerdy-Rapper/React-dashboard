import React from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import { motion } from "framer-motion";
const Sidebar = () => {
  /*Holds state when menu item is selected*/
  const [selected, setSelected] = useState(0);

  /*Controls the expansion of sidebar menu in mobile view*/
  const [expanded, setExpanded] = useState(true);

  /*Framer motion variants to control how the sidebar menu opens and close*/
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        /*if window width is less than or equal to 768, return the expanded function
        else return an empty string ''*/
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/*This is for the menu*/}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Sidebar;
