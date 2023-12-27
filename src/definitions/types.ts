export enum TokenType {
  TEXT = 'TEXT',
}

export type Token = {
  type: TokenType;
  content: string;
};

export type Rule = {
  nameId: string;
  test: (input: string) => boolean;
};
