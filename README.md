# 📁 Scanner Duplicate Files

![npm](https://img.shields.io/npm/v/scanner-duplicate-files?color=blue&label=npm) ![license](https://img.shields.io/npm/l/scanner-duplicate-files)

A simple duplicate file scanner for Node.js.

[🇧🇷 Leia em Português](README-pt.md) | [us Read in English](README.md)

## 🚀 Installation

Install globally via **npm** or **yarn**:

```sh
npm install -g scanner-duplicate-files
```

or

```sh
yarn global add scanner-duplicate-files
```

## 📌 Usage

After installation, you can run the scanner directly in the terminal or add it to your scripts in `package.json`:

In `package.json`:
```json
"scripts": {
  "scan-duplicates": "find-duplicates <directory>"
}
```

Run it directly using `npx`:

```sh
npx scanner-duplicate-files <directory>
```

Or use it directly from the terminal:

```sh
find-duplicates <directory-path>
```

Example:

```sh
find-duplicates ./my-files
```

### Options

- `-d, --delete` → Automatically removes detected duplicate files.

Example:

```sh
find-duplicates ./my-files --delete
```

You may want to change the default options. To do this, create an `sdfconfig.json` file in the root of your project.

```json
{
  "directory": "./", // default: './' - directory to scan for duplicate files
  "ignoreNodeModules": true, // default: true - ignores the node_modules folder
  "includeTypescript": true, // default: true - whether to check TypeScript files
  "includeJavascript": true, // default: true - whether to check JavaScript files
  "ignoreFolders": [ // default: dist and .git - ignores file scanning
    "**/dist/**",    // for duplicates in designated folders
    "**/.git/**"
  ]
}
```

## 🔧 How does it work?

1. Scans the specified directory.
2. Computes file hashes.
3. Compares hashes to detect duplicates.
4. Displays duplicate files and optionally removes them.

## 💻 Example Output

```
⚠️  Duplicate Files Found:
❌ file1.jpg (Duplicate of file2.jpg)
❌ document.pdf (Duplicate of document_backup.pdf)
```

If the `--delete` option is used:

```
🛢️ Removed: file1.jpg
🛢️ Removed: document.pdf
```

## 🐜 License

MIT © [Rafael Bianchi](https://github.com/BianchiBill)

