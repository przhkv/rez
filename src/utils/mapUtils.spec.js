import { expect } from 'chai';
import { extractInputData, formatSelectOptions } from './mapUtils';

describe('Map Utils', () => {
  describe('Extract Input Data', () => {
    it('should return object with data of input component using it\'s event', () => {
      const mockEmailInputEvent = {
        target: {
          name: 'email',
          type: 'email',
          value: '123@example.com'
        }
      };

      const actual = extractInputData(mockEmailInputEvent);
      const expected = {field: 'email', val: '123@example.com'};
      expect(actual).to.deep.equal(expected);
    });
  });
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
