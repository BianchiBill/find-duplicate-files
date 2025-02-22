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


---

## 🤝 Contribuindo

Contribuições para melhorar o **Scanner Duplicate Files** são bem-vindas!  
Se deseja colaborar, siga estes passos:

1. **Faça um fork** deste repositório.
2. **Clone** o seu fork:  
   ```sh
   git clone https://github.com/BianchiBill/find-duplicate-files.git
   ```
3. **Crie um novo branch** para a sua melhoria ou correção:  
   ```sh
   git checkout -b feature/new-feature
   ```
4. **Faça suas alterações** e commit:  
   ```sh
   git commit -m "feature: add new feature"
   ```
5. **Envie suas alterações** para o fork:  
   ```sh
   git push origin feature/new-feature
   ```
6. **Abra um pull request** no repositório dev.

### 🛠 Configuração para Desenvolvimento
Para configurar o projeto localmente, instale as dependências:
```sh
npm install
```
ou
```sh
yarn install
```

### 📢 Sugestões & Problemas
Se encontrar um bug ou tiver uma ideia de melhoria, por favor, abra uma [issue](https://github.com/BianchiBill/find-duplicate-files/issues).

Obrigado por contribuir! 🚀
