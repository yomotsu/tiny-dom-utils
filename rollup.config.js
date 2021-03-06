import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
const license = `/*!
 * dom-ponyfills.js
 * https://github.com/yomotsu/dom-ponyfills
 * (c) 2018 @yomotsu
 * Released under the MIT License.
 */`;

export default {
	input: 'src/index.ts',
	output: [
		{
			format: 'umd',
			file: pkg.main,
			name: 'domPonyfills',
			banner: license,
			indent: '\t',
		},
		{
			format: 'es',
			file: pkg.module,
			banner: license,
			indent: '\t',
		}
	],
	plugins: [
		typescript( {
			typescript: require( 'typescript' ),
		} ),
	],
};
