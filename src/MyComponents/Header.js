import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://i.postimg.cc/9XdX8Lkk/favicon.png"
              alt="Bootstrap"
              width="60"
              height="60"
            />
          </a>
        </div>
      </nav>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 navbar-text">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 navbar-text">
            FAQs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 navbar-text">
            About
          </a>
        </li>
      </ul>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

      <div className="text-end">
        <div>
          <div>{isAuthenticated && <p class="username">{user.name}</p>}</div>
          {isAuthenticated ? (
            <button
              className="btn btn-outline-warning log-out-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <div>
              <button
                className="btn btn-outline-warning"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
