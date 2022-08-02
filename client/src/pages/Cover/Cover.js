import React from "react";
import "./index.scss";
import "./script";

function Cover() {
  return (
    <div>
      <header>
        <div>PROJECT 3 - TEAM 2</div>
        <div>
          <a href="/JimMain">Project JIM</a>
        </div>
      </header>
      <section className="first">
        <div className="outer">
          <div className="inner">
            <div className="bg one">
              <h2 className="section-heading">Invoices are a pain</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">JIM is here to help</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">Just let J.I.M. handle it</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">And get back to your workout!</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 className="section-heading">And get back to your workout!</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cover;
