import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export * from './common';

export const baseStyles = () => injectGlobal`
  ${styledNormalize}

  html, body {
    font-size: 62.5%;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    font-family: 'Roboto', sans-serif;
  }
`