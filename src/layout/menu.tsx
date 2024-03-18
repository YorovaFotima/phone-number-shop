import "./menu.css";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
          listStyle: "none",
        }}
      >
        <li>
          {location.pathname === "/" ? (
            <button
              className="add-button"
              onClick={() => navigate("/AddNumbers")}
            >
              Add Number
            </button>
          ) : (
            <button className="add-button" onClick={() => navigate(-1)}>
              Back
            </button>
          )}
        </li>
        <li>
          <Link to="/DetailedInformation">Questions</Link>
        </li>
      </ul>
    </div>
  );
}

export { Menu };
