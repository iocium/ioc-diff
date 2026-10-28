# @iocium/ioc-diff

[![npm](https://img.shields.io/npm/v/@iocium/ioc-diff)](https://www.npmjs.com/package/@iocium/ioc-diff)
[![build](https://github.com/iocium/ioc-diff/actions/workflows/test.yml/badge.svg)](https://github.com/iocium/ioc-diff/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/iocium/ioc-diff/branch/main/graph/badge.svg)](https://codecov.io/gh/iocium/ioc-diff)
[![npm downloads](https://img.shields.io/npm/dm/@iocium/ioc-diff)](https://www.npmjs.com/package/@iocium/ioc-diff)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@iocium/ioc-diff)](https://bundlephobia.com/package/@iocium/ioc-diff)
[![types](https://img.shields.io/npm/types/@iocium/ioc-diff)](https://www.npmjs.com/package/@iocium/ioc-diff)
[![license](https://img.shields.io/npm/l/@iocium/ioc-diff)](https://github.com/iocium/ioc-diff/blob/main/LICENSE)

A full-featured, ESM-compatible IOC diffing and normalization library + CLI for InfoSec tooling.

---

## 🚀 Features

- ✅ IOC diffing with `added`, `removed`, and `changed` outputs
- 🧠 Fuzzy matching support (`levenshtein`)
- 📥 Support for multiple formats:
  - Plaintext (.txt)
  - JSON and MISP
  - CSV (with smart header matching)
  - YARA rules (.yara)
  - Sigma rules (.yml / .yaml)
- 🧪 TypeScript-native with 100% test coverage
- 📦 Works in Node.js, Cloudflare Workers, and modern browsers
- 🧼 Built-in validation and deduplication
- ⚙️ CLI and library modes

---

## 📦 Installation

```bash
bun add @iocium/ioc-diff
````

---

## 🧰 Usage (Library)

```ts
import { diffIOCs, parsePlainIOCs } from '@iocium/ioc-diff';

const oldList = parsePlainIOCs(['malicious.com', '1.1.1.1']);
const newList = parsePlainIOCs(['malicious.com', '2.2.2.2']);

const result = diffIOCs(oldList, newList, {
  matchBy: 'value+type',
  compareTags: true,
  fuzzyMatch: true,
  fuzzyThreshold: 0.9
});

console.log(result.added);    // IOCs in new but not old
console.log(result.removed);  // IOCs in old but not new
console.log(result.changed);  // Matching IOCs with tag/severity differences
```

---

## 🖥️ Usage (CLI)

```bash
ioc-diff --old old.csv --new new.csv --old-format csv --new-format csv
```

### 🔧 Options

| Flag           | Description                      |
| -------------- | -------------------------------- |
| `--old`        | Path to old IOC file             |
| `--new`        | Path to new IOC file             |
| `--old-format` | Override format detection        |
| `--new-format` | Override format detection        |
| `--fuzzy`      | Enable fuzzy matching            |
| `--threshold`  | Fuzzy similarity threshold (0–1) |

### 📁 Supported Formats

* `plaintext`
* `json`
* `misp`
* `csv`
* `yara`
* `sigma`

### 🧪 Example

```bash
ioc-diff --old iocs_old.txt --new iocs_new.txt
ioc-diff --old old.json --new new.csv --old-format json --new-format csv
```

---

## 📚 Advanced Features

* Auto-type inference (`ip`, `domain`, `url`, `email`, `sha256`, `md5`)
* Duplicate suppression by `value+type`
* Optional matching by value only (`matchBy: 'value'`)
* Extensible IOC schema with `tags`, `severity`, `source`
* Fully typed API with `DiffOptions`, `IOC`, and `IOCDiffResult`

---

## 🧪 Testing

```bash
bun run build
bun test --coverage
```

---

## 📄 License

MIT

---

## ✨ Contributing

PRs welcome! Please write tests and follow ESM-compatible conventions.