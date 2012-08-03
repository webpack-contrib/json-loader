/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function() {
	this.cacheable && this.cacheable();
	var value = JSON.parse(source);
	this.values = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t");
}