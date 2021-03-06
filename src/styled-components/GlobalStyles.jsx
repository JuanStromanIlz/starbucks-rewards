import { createGlobalStyle } from 'styled-components'

const StyledApp = createGlobalStyle`
  @font-face {
  font-family: SoDoSans;
  src: url(https://assets.web.starbucksassets.com/weblx/static/a04d3c474ae54100589fa362d8f6db2a.woff);
  font-weight: 400;
  font-style: normal;
  font-display: swap
  }
  @font-face {
    font-family: SoDoSans;
    src: url(https://assets.web.starbucksassets.com/weblx/static/9072643e9f07efac73cc4b79a2b55d7c.woff);
    font-weight: 600;
    font-style: normal;
    font-display: swap
  }
  @font-face {
    font-family: SoDoSans;
    src: url(https://assets.web.starbucksassets.com/weblx/static/891bac4bf2cf726a4a3ccf8560d7c300.woff);
    font-weight: 700;
    font-style: normal;
    font-display: swap
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    height: 100%;
    margin: 0;
    background-color: #fff;
    color: rgba(0, 0, 0, .87);
    font-family: SoDoSans, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -.01em;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "calt"
  }
  @media (min-width: 768px) {
    body {
      font-size: 1.6rem;
    }
  }
  @media (min-width: 1024px) {
    main {
      padding-top: 99px;
    }
  }
  *,
  :after,
  :before {
    box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
  }
  button, input {
    font: inherit;
  }
  main {
    position: relative;
    z-index: 1;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default StyledApp;