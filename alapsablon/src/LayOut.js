import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* A publikus tartalom linkje */}
            <Link to="/">Főoldal</Link>
          </li>
          <li>
            {/* Az admin oldal linkjetartalom linkje */}
            <Link to="/alkoto">Alkotó</Link>
          </li>
          <li>
            {/* Az admin oldal linkjetartalom linkje */}
            <Link to="/csapat">Csapat</Link>
          </li>
        </ul>
      </nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;