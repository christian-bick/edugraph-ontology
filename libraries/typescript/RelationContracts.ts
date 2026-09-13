import data from "./relation-contracts.json";

type RuleId = "ONT-S3" | "ONT-R1";
function ruleId(value: string): RuleId {
  if (value !== "ONT-S3" && value !== "ONT-R1") throw new Error(`Unknown relation rule: ${value}`);
  return value;
}

/** Fixed vocabulary contracts shared with Python; supplied schemas still drive queries. */
export const RELATION_SCHEMA_CONTRACT = Object.freeze({
  inverses: Object.freeze(data.schema.inverses.map(c => Object.freeze({ ...c, ruleId: ruleId(c.ruleId) }))),
  subproperties: Object.freeze(data.schema.subproperties.map(c => Object.freeze({ ...c, ruleId: ruleId(c.ruleId) }))),
});

/** Primary authored relation families, independent of the validation implementation. */
export const PRIMARY_RELATION_FAMILIES = Object.freeze({
  structural: Object.freeze(data.families.structural),
  progression: Object.freeze(data.families.progression),
  constraints: Object.freeze(data.families.constraints),
});
