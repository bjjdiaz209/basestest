
import { characters} from "../../src/js-foundation/02-destructuring";


describe('js-fundation/02-destructuring.ts', () => {

    test('characters', () => {

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
    });

    test(('first character should be flash , and second superman'), () => {
        const [ flash ,superman ] = characters;
        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    });
    


});