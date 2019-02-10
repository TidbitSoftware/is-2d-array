'use strict';

module.exports = array => {
	if (!(object.constructor === Array)) {
		return false;
	}

	for (const item of array) {
		if (!(item.constructor === Array)) {
			return false;
		}
	}

	return true;
};
