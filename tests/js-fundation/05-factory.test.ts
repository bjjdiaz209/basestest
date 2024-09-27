
import {buildMakePerson } from "../../src/js-foundation/05-factory";


describe( 'js-fundation/05-factory.ts', () => {
   
    const getUUID = () => '1234';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => {
       const makePerson = buildMakePerson({ getUUID, getAge });
       expect(typeof  makePerson).toBe('function');

    });

    test('makePerson should return a person object', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const person = makePerson({ name: 'John Doe', birthdate: '1985-01-01' });
        expect(person).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-01-01',
            age: 35,
        });

    });

});
