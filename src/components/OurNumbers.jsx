import React from "react";
import CountUp from "react-countup";
export default function OurNumbers() {
  return (
    <div style={{ backgroundColor: "#e5ccfa" }} className="numbers py-5">
      {/* <h4 className="text-center py-4 fw-bold fs-2 text-bright">Our Goals</h4> */}
      <div className="d-flex flex-column flex-md-row justify-content-evenly">
        <div className="text-center pt-4">
          <CountUp start={0} end={8} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div>
                <h5 ref={countUpRef} className="display-3 fw-bold" />
                <p className="fs-italic fs-4 ">Years in Operation</p>
              </div>
            )}
          </CountUp>
        </div>
        <div className="text-center pt-4">
          <CountUp start={0} end={2000} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div>
                <h5 ref={countUpRef} className="display-3 fw-bold" />
                <p className="fs-italic fs-4">NUmber Of Clients Reached</p>
              </div>
            )}
          </CountUp>
        </div>
        <div className="text-center pt-4">
          <CountUp start={0} end={4} delay={0} enableScrollSpy>
            {({ countUpRef }) => (
              <div>
                <h5 ref={countUpRef} className="display-3 fw-bold" />
                <p className="fs-italic fs-4">NUmber Of Countries serving</p>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </div>
  );
}
