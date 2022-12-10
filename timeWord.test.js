const { timeWord } = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('midnight', () => {
    let result = timeWord('00:00')
    expect(result).toEqual('midnight')
  })

  test('noon' , () => {
    let result = timeWord('12:00')
    expect(result).toEqual('noon')
  })

  test('am' , () => {
    let result = timeWord('04:20')
    expect(result).toEqual('four twenty am')
  })

  test('pm', () => {
    let result = timeWord('16:20')
    expect(result).toEqual('four twenty pm')
  })

  test('single digit minutes turns into "o [digit]"', () => {
    let result = timeWord('04:04')
    expect(result).toEqual('four o four am')
  })
});
