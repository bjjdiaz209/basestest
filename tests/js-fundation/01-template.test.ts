import {emailTemplate} from "../../src/js-foundation/01-template";

describe('js-fundation/01-template', () => {

    test('should return email template', () => {
         
        expect(emailTemplate).toContain('Hi, ');

    });

    test(' email template should contain {{name}} and {{orderId}}', () => {
         
        expect( emailTemplate).toMatch('{{name}}');
        expect( emailTemplate).toMatch('{{orderId}}');

        expect( emailTemplate).toContain('{{name}}');
        expect( emailTemplate).toContain('{{orderId}}');

     });


});


