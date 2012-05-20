/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function() {
	this.cacheable && this.cacheable();
	var values = this.values = [];
	var options = this;
	var args = Array.prototype.slice.call(arguments);
	args.forEach(function(str, idx) {
		values[idx] = JSON.parse(str);
	});
	var results = [null];
	values.forEach(function(jsobj, idx) {
		results[idx+1] = "module.exports = " + JSON.stringify(jsobj, undefined, "\t");
	});
	this.callback.apply(null, results);
}