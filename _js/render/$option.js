'use strict';

import html from '../helpers/html';

export default (artwork) => {

  return html`<option value="${artwork.id}">${artwork.label}</option>`;

};
