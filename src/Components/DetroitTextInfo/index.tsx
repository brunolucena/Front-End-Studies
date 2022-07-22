import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Typewriter from "react-ts-typewriter";
import "./styles.scss";

export default function DetroitTextInfo() {
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow((current) => !current);
  };

  return (
    <div style={{ backgroundColor: "#27323b", minHeight: "100vh" }}>
      <button onClick={toggle}>{String(show)}</button>

      <div style={{ margin: 50 }}>
        <CSSTransition
          classNames={{
            enterActive: "enter-active",
            exitActive: "exit-active",
          }}
          in={show}
          timeout={1000}
          unmountOnExit
        >
          <div className="detroit-text-info">
            <p className="text">
              {show && (
                <Typewriter
                  cursor={false}
                  speed={2}
                  text="O POLICIAL ATIROU NO DIVERGENTE"
                />
              )}
            </p>
            <div className="background" />
            <div className="squares">
              <div className="square" />
              <div className="square" />
              <div className="square" />
              <div className="square" />
              <div className="square" />
              <div className="square" />
              <div className="square" />
            </div>
            <div className="white-bars">
              <div className="group1">
                <div className="bar-background" />
                <div className="bar" />
              </div>
              <div className="group2">
                <div className="bar-background" />
                <div className="bar" />
              </div>
            </div>
            <div className="blue-bar" />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}
