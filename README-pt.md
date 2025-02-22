# 📁 Scanner Duplicate Files

![npm](https://img.shields.io/npm/v/scanner-duplicate-files?color=blue&label=npm) ![license](https://img.shields.io/npm/l/scanner-duplicate-files)

Um simples scanner de arquivos duplicados para Node.js.

[🇧🇷 Leia em Português](README-pt.md) | [us Read in English](README.md)

## 🚀 Instalação

Instale globalmente via **npm** ou **yarn**:

```sh
npm install -g scanner-duplicate-files
```

ou

```sh
yarn global add scanner-duplicate-files
```

## 📌 Uso

Após instalar, você pode executar o scanner diretamente no terminal ou adicionar aos seus scripts no package.json:

No package.json:
```json
"scripts": {
  "scan-duplicates": "find-duplicates <diretório>"
}
```

Pode rodar diretamente via npx:

```sh
npx scanner-duplicate-files <diretório>
```

Utilizando diretamente pelo terminal:

```sh
find-duplicates <caminho-do-diretório>
```

Exemplo:

```sh
find-duplicates ./meus-arquivos
```

### Opções

- `-d, --delete` → Remove automaticamente os arquivos duplicados encontrados.

Exemplo:

```sh
find-duplicates ./meus-arquivos --delete
```

Você pode desejar mudar as opções default, para isso crie um arquivo `sdfconfig.json` na raiz do projeto.

```json
{
  "directory": "./", // default: './' - diretorio para busca de arquivos duplicados
  "ignoreNodeModules": true, // default: true - vai ignorar a pasta node_modules
  "includeTypescript": true, // default: true - vai verificar ou não arquivos TypeScript
  "includeJavascript": true, // default: true - vai verificar ou não arquivos JavaScript
  "ignoreFolders": [ // default: dist e .git - ignora a busca por arquivos 
    "**/dist/**",    // duplicados nas pastas designadas 
    "**/.git/**"
  ]
}
```

## 🔧 Como funciona?

1. Percorre o diretório informado.
2. Calcula hashes dos arquivos.
3. Compara os hashes para detectar duplicatas.
4. Exibe os arquivos duplicados e, opcionalmente, os remove.

## 💻 Exemplo de Saída

```
⚠️  Arquivos Duplicados Encontrados:
❌ arquivo1.jpg (Duplicado de arquivo2.jpg)
❌ documento.pdf (Duplicado de documento_backup.pdf)
```

Se a opção `--delete` for usada:

```
🗑️ Removido: arquivo1.jpg
🗑️ Removido: documento.pdf
```

## 📜 Licença

MIT © [Rafael Bianchi](https://github.com/BianchiBill)

