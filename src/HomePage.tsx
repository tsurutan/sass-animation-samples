import React from "react";
import styles from "HomePage.module.scss";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/card">Card</Link>
        <Link to="/3d">3D</Link>
      </nav>
      <h1>Animation List</h1>
      <div className={styles.container}>
        {[...new Array(20)].map((_, index) => (
          <div>
            <h2>{index + 1}</h2>
            <div className={styles[`anim${index + 1}`]} />
          </div>
        ))}
      </div>
    </div>
  );
};
