'use strict';

import html from '../helpers/html';

export default (basename,path, srcset, sizes, sources) => {
	let tmp_srcset=[];
	let tmp_sizes=[];
	let tmp_sources=[];
	for (var key of Object.keys(srcset)) {
		tmp_srcset.push(`${path}${basename}_${key}.jpg ${srcset[key]}w`);
	}

	for (var key of Object.keys(sizes)) {
		tmp_sizes.push(`(min-width: ${key}px) ${sizes[key]}vw`);
	}

	for (var key of Object.keys(sources)) {
		tmp_sources.push(`<source type="image/webp" media="(min-width: ${sources[key]}px)" srcset="${path}${basename}_${key}.webp"/>`);
		tmp_sources.push(`<source media="(min-width: ${sources[key]}px)" srcset="${path}${basename}_${key}.jpg"/>`);
	}

	return html`
		<picture>
			${tmp_sources.join("")}
			<img src="${path}${basename}.jpg" 
			srcset="${tmp_srcset.join()}"
			sizes="${tmp_sizes.join()}"
			alt="${basename} background" >
		</picture>
	`;

};
