
import {getAge} from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {

    test('getAge should return the age of a person', () => {
        const birthdate = '1985-01-01';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');
    });

    test('getAge should return the age of a person', () => {
        const birthdate = '1985-01-01';
        const age = getAge(birthdate);
         
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
      
    });

    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1995-12-31';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
    });
});