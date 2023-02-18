import React, { useState } from "react";
import { Link } from "react-router-dom";
// import './Sidebar.css';

// interface SidebarProps {
//   children: React.ReactNode;
// }

export default function Sidebar(): JSX.Element {
  // export default function Sidebar({ children }: SidebarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`Sidebar ${isOpen ? "open" : ""}`}>
      <div className="Sidebar__toggle" onClick={handleToggle}>
        <i className="fa fa-bars" />
      </div>
      <div>
        <Link to="/">home </Link>
        <Link to="/signin">signin </Link>
        <Link to="/signup">signup </Link>
      </div>
      {/* <div className="Sidebar__content">{children}</div> */}
    </div>
  );
}
