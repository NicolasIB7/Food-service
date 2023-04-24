import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={style.body}>
        <h2 className={style.p}>Welcome to Henry food</h2>
      </div>

      <div className={style.container}>
        <Link to='/home' className={style.animatedword}>
          ENJOY
        </Link>
      </div>
    </>
  );
};

export default Landing;
