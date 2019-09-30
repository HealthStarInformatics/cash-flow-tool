import React from "react";
import CashFlowHero from "./CashFlowHero";

const LandingPage = props => (
  <section id="landing">
    <CashFlowHero />
    {console.log(props.match)}
  </section>
);

export default LandingPage;
