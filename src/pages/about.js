import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
      <h2>Who am I</h2>
      <p>
        I'm a tech lover. I love reading all about exciting new hardware and
        software, technologies etc. I absolutely love electronic music, EDM and
        such. Been in love in gaming ever since I was a kid. I now play
        Overwatch casually - look me up: battletag: NEM #2630
      </p>
      <h2>What I do</h2>
      <p>
        I'm a software developer, so mostly I write software for fun and profit.
         I've worked for four years at the Wix customer support team, nearly
        three years at Haaretz/TheMarker as a web developer, and I'm currently a
        software developer at Microsoft.
      </p>
    </div>
  );
}
