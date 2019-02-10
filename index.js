'use strict';

module.exports = array => {
	if (!(object.constructor === Array)) {
		return false;
	}

	for (const item of array) {
		if (!(object[item].constructor === Array)) {
			return false;
		}
	}

	return true;
};
