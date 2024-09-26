
import {getUserById} from "../../src/js-foundation/03-callbacks";


describe('js-fundation/03-callbacks', () => {
    
    test('getUserById should return an error if user does not exist', (done) => {
       
        const id = 10;


        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
          done();

        });
    });


    test('getUserById should return a user if user exists', (done) => {
       
        const id = 1;

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
            });
          done();

        });
    });


});

