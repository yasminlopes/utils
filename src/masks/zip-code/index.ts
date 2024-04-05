export const zipCodeMask = (value: string) => value.replace(/^(\d{5})(\d)/, "$1-$2")
// zipCodeMask('12345678'); // 12345-678