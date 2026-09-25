/** Presentation choices for an English competency involvement statement. */
export interface InvolvementStatementOptions {
  /** Overrides the authored label or humanized IRI local name. */
  readonly label?: string;
  /** Defaults to true; missing comments never produce an example marker. */
  readonly includeComment?: boolean;
  /** Defaults to "For example:". Use "" to append explanatory prose directly. */
  readonly commentPrefix?: string;
}

export function normalizedText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function sentence(value: string): string {
  return /[.!?]["'’”)]*$/.test(value) ? value : value + ".";
}

/** Display fallback only; never used as a descriptor's identity. */
function displayName(iri: string): string {
  const name = iri.split(/[/#:]/).pop() || iri;
  return normalizedText(name.replace(/[_-]+/g, " ")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2"));
}

/** Format selected annotation text without altering formulas or letter case. */
export function formatInvolvementStatement(
  iri: string, definition: string, comment: string, label: string,
  options: InvolvementStatementOptions,
): string {
  const title = options.label === undefined ? label || displayName(iri) : normalizedText(options.label);
  if (!title) throw new Error("Statement label must not be empty");
  const result = `Involves ${title}: ${sentence(definition)}`;
  if (options.includeComment === false || !comment) return result;
  const prefix = normalizedText(options.commentPrefix ?? "For example:");
  return `${result} ${prefix ? prefix + " " : ""}${sentence(comment)}`;
}
