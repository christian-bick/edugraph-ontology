import type { OntologyStatement } from "./OntologyTypes";

/** Check each record before widening it so large snapshots do not infer an oversized union. */
export function renderSnapshotSource(statements: readonly OntologyStatement[]): string {
  const entries = statements.map(statement =>
    `(${JSON.stringify(statement)} satisfies OntologyStatement) as OntologyStatement`);
  return '// Generated from authored Turtle; includes original term/source information.\n' +
    'import type { OntologyStatement } from "./core";\n' +
    '/** Original release facts; inverse and superproperty access is derived by the core. */\n' +
    'export const bundledStatements: readonly OntologyStatement[] = [\n' +
    entries.join(',\n') + '\n];\n';
}
