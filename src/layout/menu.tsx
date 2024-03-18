import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const [nextPath, setNextPath] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setNextPath('/AddNumbers');
    } else {
      setNextPath('/');
    }
  }, [location]);

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
          <button onClick={() => navigate(nextPath)}>
            {location.pathname === '/' ? "AddNumbers" : "Go Back"}
          </button>
        </li>
      </ul>
    </div>
  );
}

export { Menu };