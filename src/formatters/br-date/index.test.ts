import formatToBrDate from './index';

describe('formatToBrDate', () => {
  it('should return data formatted in Brazilian format', () => {
    // Arrange
    const today = new Date();
    const specificDate = new Date('2024-12-25');
    const isoDateString = '2001-04-27T00:00:00';
    const isoDate = new Date(isoDateString);

    const options = today.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    // Act
    const getToday = formatToBrDate(today);
    const getSpecificDate = formatToBrDate(specificDate);
    const getIsoDate = formatToBrDate(isoDate);

    // Assert
    expect(getToday).toBe(options);
    expect(getSpecificDate).toBe('25/12/2024');
    expect(getIsoDate).toBe('27/04/2001');
  });
});
