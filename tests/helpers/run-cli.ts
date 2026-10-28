import { execSync } from 'node:child_process';
import path from 'node:path';

/**
 * Run the compiled CLI from dist/bin/ioc-diff.js via bun.
 */
export function runCli(args = ''): string {
  const cliPath = path.resolve(import.meta.dir, '../../dist/bin/ioc-diff.js');
  return execSync(`bun ${cliPath} ${args}`, { encoding: 'utf8' });
}
