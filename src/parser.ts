import {IParser, IRuleEngine} from './definitions/interfaces';
import {Token} from './definitions/types';
import {RuleEngine} from './ruleEngine';

export class Parser implements IParser {
  private ruleEngine: IRuleEngine;

  constructor(ruleEngine?: IRuleEngine) {
    this.ruleEngine = ruleEngine || new RuleEngine();
  }
  parse(input: string): Token {
    return {type: 'text', content: input};
  }
}
