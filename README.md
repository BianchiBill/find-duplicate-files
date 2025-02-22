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

! It is not checked if the files have the same names, but if they have the same code/text.

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

---

## 🤝 Contributing

We welcome contributions to improve **Scanner Duplicate Files**!  
If you'd like to contribute, follow these steps:

1. **Fork** this repository.
2. **Clone** your fork:  
   ```sh
   git clone https://github.com/BianchiBill/find-duplicate-files.git
   ```
3. **Create a new branch** for your feature or fix:  
   ```sh
   git checkout -b feature/new-feature
   ```
4. **Make your changes** and commit them:  
   ```sh
   git commit -m "feature: add new feature"
   ```
5. **Push** your changes to your fork:  
   ```sh
   git push origin feature/new-feature
   ```
6. **Open a pull request** on the dev repository.

### 🛠 Development Setup
To set up the project locally, install dependencies:
```sh
npm install
```
or
```sh
yarn install
```

### 📢 Suggestions & Issues
If you find a bug or have an idea for improvement, please open an [issue](https://github.com/BianchiBill/find-duplicate-files/issues).

Thank you for contributing! 🚀

