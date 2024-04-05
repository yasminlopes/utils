import { CPF_LENGTH, generateCpf } from '.';
import { BR_STATES_DATA, STATES } from '../../common/index';
import { validateCpf } from '../../validators/cpf';

describe('generateCpf', () => {
    test(`should have the right length without mask (${CPF_LENGTH})`, () => {
      expect(generateCpf().length).toBe(CPF_LENGTH);
    });
  
    test('should return valid CPF', () => {
      // iterate over 100 to insure that random generated CPF is valid
      for (let i = 0; i < 100; i++) {
        expect(validateCpf(generateCpf())).toBe(true);
      }
    });
  
    describe('should return a valid CPF for each brazilian state with initials', () => {
      STATES.map((state) =>
        test(state, () => {
          expect(generateCpf(state).substr(8, 1) === BR_STATES_DATA[state].code).toBe(true);
        })
      );
    });
  });