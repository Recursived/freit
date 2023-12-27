import {IRuleEngine} from './definitions/interfaces';
import {Rule} from './definitions/types';

export class RuleEngine implements IRuleEngine {
  private rules: Map<string, Rule>;

  constructor() {
    this.rules = new Map();
  }
  getRule(nameId: string) {
    return this.rules.get(nameId);
  }

  addRule(rule: Rule): void {
    this.rules.set(rule.nameId, rule);
  }

  getRules(): Rule[] {
    return Array.from(this.rules.values());
  }
}
