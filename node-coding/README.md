# Node Coding Interview Starter

This is a basic npm project set up with TypeScript and Jest for conducting coding interviews.

## Setup

The project includes:
- **TypeScript**: For type-safe JavaScript development
- **Jest**: For testing framework
- **ts-jest**: For running TypeScript tests with Jest

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

3. Run tests in watch mode:
```bash
npm run test:watch
```

4. Build TypeScript:
```bash
npm run build
```

5. Run tests with coverage:
```bash
npm run test:coverage
```

## Project Structure

- `src/` - Source files (TypeScript)
- `dist/` - Compiled JavaScript output
- `src/example.ts` - Example TypeScript file
- `src/example.test.ts` - Example test file

## Writing Code

Create your TypeScript files in the `src/` directory. The TypeScript compiler is configured to:
- Target ES2020
- Use strict mode
- Output compiled files to `dist/`

## Writing Tests

Create test files with `.test.ts` or `.spec.ts` extension in the `src/` directory. Jest is configured to automatically find and run these tests.
