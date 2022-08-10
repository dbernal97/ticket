/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.header #header-title {
  background-color: #072146;
}
.header section {
  text-align: center;
}

.main-container {
  padding: 5px;
}
.main-container .info-section .link-info {
  margin: 10px 0;
}
.main-container .info-section #button {
  margin: 15px 0;
}
.main-container .info-section #text-code {
  margin-bottom: 15px;
}
.main-container .panel-section #panel-title {
  height: 32px;
  color: #121212;
  font-size: 22px;
  font-weight: 300;
}

@media screen and (min-width: 800px) {
  .main-container {
    display: flex;
    margin-left: 5%;
  }
  .main-container .info-section {
    margin-top: 20px;
    width: 50%;
    padding: 0 20px;
  }
  .main-container .panel-section {
    width: 40%;
    padding: 0 20px;
  }
}
`;