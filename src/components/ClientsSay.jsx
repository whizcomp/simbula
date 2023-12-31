import React from "react";
import AOS from "aos";
export default function ClientsSay() {
  React.useEffect(() => {
    window.onload = () => {
      AOS.init();
    };
  }, []);

  return (
    <div className="py-5 shadow " style={{ backgroundColor: "#d4cfcf" }}>
      <h1 className="text-center" data-aos="fade-down">What our Clients say </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4" data-aos="fade-right">
            <blockquote className="quote ps-5">
              <p className="quote__text ">
                I had the best time with simbula from stunning destinations, and
                unforgettable experiences
              </p>
              <p className="quote__name">___ Victor Kipkoech </p>
            </blockquote>
          </div>
          <div className="col-12 col-md-4"data-aos="fade-up">
            <blockquote className="quote ps-5">
              <p className="quote__text ">
                Five stars! Simbula safaris made our family vacation a breeze.
                We discovered hidden gems and had a blast exploring new places.
              </p>
              <p className="quote__name">___ Mary Anne </p>
            </blockquote>
          </div>
          <div className="col-12 col-md-4"data-aos="fade-left">
            <blockquote className="quote ps-5">
              <p className="quote__text ">
                I can't thank Simbula Safaris enough for helping me plan the
                vacation of a lifetime. Everything was perfect, and the memories
                will last forever!
              </p>
              <p className="quote__name">___ Peter Right </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
