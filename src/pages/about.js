import React from "react";
import Layout from "../components/layout";

export default function About({ data }) {
  return (
    <Layout>
      <section>
        <h2>Who am I</h2>
        <p>
          I'm a tech lover. I love reading all about exciting new hardware and
          software, technologies etc. I absolutely love electronic music, EDM
          and such. Been in love in gaming ever since I was a kid. I now play
          Overwatch casually - look me up: battletag: NEM #2630
        </p>
        <h2>What I do</h2>
        <p>
          I'm a software developer, so mostly I write software for fun and
          profit.  I've worked for four years at the Wix customer support team,
          nearly three years at Haaretz/TheMarker as a web developer, and I'm
          currently a software developer at Microsoft.
        </p>
      </section>
    </Layout>
  );
}
