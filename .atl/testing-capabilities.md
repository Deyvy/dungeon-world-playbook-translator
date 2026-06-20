## Testing Capabilities

**Strict TDD Mode**: Disabled
**Detected**: 2026-06-20
**Project**: Dungeon World Playbook Translator

### Test Runner

- Command: N/A
- Framework: None detected

### Test Layers

| Layer       | Available | Tool |
|-------------|-----------|------|
| Unit        | ❌        | —    |
| Integration | ❌        | —    |
| E2E         | ❌        | —    |

### Coverage

- Available: ❌
- Command: —

### Quality Tools

| Tool         | Available | Command          |
|--------------|-----------|------------------|
| Linter       | ✅        | `npm run lint`   |
| Type checker | ✅        | `npx tsc -b`     |
| Formatter    | ❌        | —                |

### Notes

- Project has a Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4 frontend in `guerrero-react/`.
- ESLint 10 is configured via `@eslint/js` + `typescript-eslint`.
- No test runner is configured — no vitest, jest, or playwright dependency.
- No test files exist in the source tree.
- Strict TDD is disabled because no test runner is available.
- Recommendation: add vitest + @testing-library/react for component-level tests before the next change.
