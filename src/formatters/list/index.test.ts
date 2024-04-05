import formatToList from './index';

describe('formatToList', () => {
  it('should return an empty string for an empty array', () => {
    // Arrange
    const input = [];

    // Act
    const result = formatToList(input);

    // Assert
    expect(result).toBe('');
  });

  it('should return the single item for a one-item array', () => {
    // Arrange
    const input = ['Yasmin'];

    // Act
    const result = formatToList(input);

    // Assert
    expect(result).toBe('Yasmin');
  });

  it('should format a two-item array correctly', () => {
    // Arrange
    const input = ['Yasmin', 'Maria'];

    // Act
    const result = formatToList(input);

    // Assert
    expect(result).toBe('Yasmin e Maria');
  });

  it('should format a three-item array correctly', () => {
    // Arrange
    const input = ['Yasmin', 'Maria', 'João'];

    // Act
    const result = formatToList(input);

    // Assert
    expect(result).toBe('Yasmin, Maria e João');
  });
});