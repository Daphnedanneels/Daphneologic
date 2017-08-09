'use strict';

import html from '../helpers/html';

export default (color) => {

  return html`<div class="radio-wrapper">
  					<input type="radio" name="color" id="color${color.value}" value="${color.value}" class="color">
					<label for="color${color.value}">${color.label}</label>
				</div>`;

};
