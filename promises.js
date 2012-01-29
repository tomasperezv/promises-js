/**
 * Asynchronous Programming FW for Javascript, based on the Promises pattern.
 * @author tom@0x101.com 
 * 2012
 */
var Promise = function() {
	this.result = null;
	this.error = null;
	this.onSuccess = null;
	this.onError = null;
};

/**
 * Operation successful, process the result 
 * @author tom@0x101.com
 */
Promise.prototype.then = function(onSuccess, onError) {
	this.onSuccess = onSuccess;
	this.onError = onError;
};

/**
 * Operation successful, process the result 
 * @author tom@0x101.com
 */
Promise.prototype.resolve = function(result) {
	this.result = result;
};

/**
 * Reject promise, call to onError
 * @author tom@0x101.com
 */
Promise.prototype.reject = function(error) {
	this.error = error;
};

/**
 * Handle several results
 * @author tom@0x101.com
 */
Promise.prototype.when = function() {
	// Combine different promises
};
