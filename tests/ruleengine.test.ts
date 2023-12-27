import {Rule} from '../src/definitions/types';
import {RuleEngine} from '../src/ruleEngine';

describe('Rule engine', () => {
  let ruleEngine: RuleEngine;

  beforeEach(() => {
    ruleEngine = new RuleEngine();
  });

  describe('should add rule(s) correctly', () => {
    it('should add a rule correctly', async () => {
      const rule: Rule = {
        nameId: 'rule1',
        test: () => true,
      };
      ruleEngine.addRule(rule);
      expect(ruleEngine.getRules()).toHaveLength(1);
    });

    it('should add multiple rules correctly', async () => {
      const rule1 = {
        nameId: 'rule1',
        test: () => true,
      };
      const rule2 = {
        nameId: 'rule2',
        test: () => true,
      };
      ruleEngine.addRule(rule1);
      ruleEngine.addRule(rule2);
      expect(ruleEngine.getRules()).toHaveLength(2);
    });
  });

  it("should return rule's nameId correctly", async () => {
    const rule: Rule = {
      nameId: 'rule1',
      test: () => true,
    };
    ruleEngine.addRule(rule);
    expect(ruleEngine.getRule('rule1')).toEqual(rule);
  });
});
