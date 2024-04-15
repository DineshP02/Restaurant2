import "./App.css";
import { useState } from "react";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);
  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleNestedDropdownMouseEnter = () => {
    setIsNestedDropdownOpen(true);
  };

  const handleNestedDropdownMouseLeave = () => {
    setIsNestedDropdownOpen(false);
  };
  return (
    <div>
      <nav className=" navbar navbar-expand-lg ">
        <div className="container-fluid p-3 mb-2 bg-dark bg-gradient text-white px-5">
          <a className="navbar-brand text-white " href="#">
            RESTAURANTLY
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNav"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>{" "}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link " href="#">
                  About
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Special
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Chefs
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <a
                  className="nav-link dropdown-toggle px-3"
                  href="#"
                  role="button"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                >
                  Dropdown link
                </a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show">
                    <li>
                      <a className="dropdown-item" href="#">
                        DropDown 1
                      </a>
                    </li>
                    <li
                      className="dropdown-submenu"
                      onMouseEnter={handleNestedDropdownMouseEnter}
                      onMouseLeave={handleNestedDropdownMouseLeave}
                    >
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        role="button"
                        aria-expanded={isNestedDropdownOpen ? "true" : "false"}
                      >
                        nested DropDown
                      </a>
                      {isNestedDropdownOpen && (
                        <ul className="dropdown-menu show">
                          <li>
                            <a className="dropdown-item" href="#">
                              Nested DropDown 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Nested DropDown 2
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        DropDown 3
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            <button
              className="btn btn-dark nav-item text-light border border-warning rounded-pill"
              style={{
                backgroundColor: "transparent",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0e68c";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Book a table
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
