import moment from 'moment';

import isActive from './isActive';

// today is set as 10/29/2019 on setupTests.js

it('should return true if today is same/after the startDate and same/before the endDate', () => {
    expect(isActive('10/28/2019', '10/30/2019')).toBe(true);
    expect(isActive('10/29/2019', '10/30/2019')).toBe(true);
    expect(isActive('10/28/2019', '10/29/2019')).toBe(true);
    expect(isActive('10/29/2019', '10/29/2019')).toBe(true);
});

it('should return false if today is before the startDate or after the endDate', () => {
    expect(isActive('10/30/2019', '10/31/2019')).toBe(false);
    expect(isActive('10/27/2019', '10/28/2019')).toBe(false);
});