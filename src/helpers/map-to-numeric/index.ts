import { RegExHelper } from 'helpers/regex';
export const mapToNumeric = (value: string) => value.replace(RegExHelper.nonDigit, '');
