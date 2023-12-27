import {Rule, Token} from './types';

export interface IParser {
  parse(input: string): Token;
}

export interface IRuleEngine {
  addRule(rule: Rule): void;
  getRules(): Rule[];
  getRule(nameId: string): Rule;
}
