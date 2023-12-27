import {Parser} from '../src/parser';

describe('Parser', () => {
  let parser;

  beforeAll(() => {
    parser = new Parser();
  });

  it('should parse normal text without any change', async () => {
    expect(parser.parse('Hello, World!')).toEqual({
      type: 'text',
      content: 'Hello, World!',
    });
  });

  it('should parse empty text without correctly', async () => {
    expect(parser.parse('')).toEqual({
      type: 'text',
      content: '',
    });
  });
});
