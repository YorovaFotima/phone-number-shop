import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "20px",
          listStyle: "none",
          // backgroundColor : "rgb(186, 153, 133)",
        }}
      >
        <li>
        <Link to="/">ListNumbers</Link>
        </li>
        <li>
          <Link to="/AddNumbers">AddNumbers</Link>
        </li>
        <li>
          <Link to="/DetailedInformation">DetailedInformation</Link>
        </li>
        <li>
          <Link to="/EditNumber">EditNumber</Link>
        </li>
       
      </ul>
    </div>
  );
}

export { Menu };
