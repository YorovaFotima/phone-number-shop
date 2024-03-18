import "./menu.css";
import { useLocation, useNavigate} from "react-router-dom";

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
              onClick={() => navigate("/add-numbers")}
            >
              Add Number
            </button>
          ) : (
            <button className="add-button" onClick={() => navigate(-1)}>
              Back
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export { Menu };
