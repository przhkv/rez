import { expect } from 'chai';
import { formatSelectOptions } from './mapUtils';

describe('Map Utils', () => {
  describe('Format Select Options', () => {
    it('should return array of objects formatted for use in a SelectInput component', () => {
      const options = ['EN', 'FR', 'JP'];
      const optionsDictionary = {
        EN: 'English',
        FR: 'French',
        JP: 'Japanese'
      };

      const actual = formatSelectOptions(options, optionsDictionary);
      const expected = [
        {value: 'EN', text: 'English'},
        {value: 'FR', text: 'French'},
        {value: 'JP', text: 'Japanese'}
      ];

      expect(actual).to.deep.equal(expected);
    });
  });
});
