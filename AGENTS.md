# Instructions for Coding Agents

When starting a new session, confirm that you have read this document as well as all other documents named here.

## 1. Interactions

- **Respect Questions:** When asked questions, answer the question and make helpful suggestions. Never start coding without explicit confirmation when asked questions.
- **Provide Summaries:** When performing coding tasks, always provide a brief summary and explanation of your changes. Highlight key findings and decisions you have made autonomously on the way.
- **Ask for Help:** When you keep failing on a task, stop and explain your issue. Ask for human expert opinion to collaboratively solve particularly hard tasks.

## 2. Project Context

Before executing any tasks always make yourself familiar with the project:

- **Read the README.md** to make yourself familiar with the usage and general project structure
- **Read the DOCS.md** to make yourself familiar with the technical documentation
- **Read docs/README.md** and load the references it lists for the current authoring or review task.
- Use the references' Audit checklists and cite stable rule IDs in findings. Keep application
  implementation details in their owning repositories. Use docs/annotations-and-models.md for
  general guidance on annotations and models; do not assume a particular downstream architecture.

Update the relevant documentation after larger changes. Authoring rules belong in docs/;
DESIGN.md holds rationale, and DOCS.md holds tooling and workflows. Link rules rather than
duplicating their wording. Record unresolved modeling or adoption work in docs/plan/.
