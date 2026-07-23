# 🔳 QR Code Generator

Um gerador de QR Code desenvolvido em **Node.js** durante o curso **The Complete Full-Stack Web Development Bootcamp** da Udemy.

O programa solicita uma URL ao usuário através do terminal, gera um QR Code correspondente e salva tanto a imagem quanto a URL em arquivos locais.

## 📸 Demonstração

Ao executar o projeto:

```bash
node index.js
```

O terminal solicitará:

```text
? Digite uma URL: https://www.google.com
```

Após informar a URL, serão criados automaticamente:

```
QRCode.png
url.txt
```

- **QRCode.png** → Imagem contendo o QR Code.
- **url.txt** → Arquivo com a URL informada pelo usuário.

---

## 🚀 Tecnologias utilizadas

- Node.js
- JavaScript (ES Modules)
- Inquirer
- qr-image
- File System (fs)

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/Projeto-QRCODE.git
```

Entre na pasta do projeto:

```bash
cd Projeto-QRCODE
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar

Execute o projeto com:

```bash
node index.js
```

Digite uma URL quando solicitado.

Exemplo:

```text
? Digite uma URL:
https://github.com
```

O programa irá gerar:

```
QRCode.png
url.txt
```

---

## 📁 Estrutura do projeto

```
Projeto-QRCODE/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── QRCode.png
└── url.txt
```

> **Observação:** Os arquivos `QRCode.png` e `url.txt` são gerados automaticamente durante a execução do projeto.

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram utilizados conceitos importantes de Node.js, como:

- ES Modules (`import`)
- Entrada de dados pelo terminal com Inquirer
- Manipulação de arquivos com o módulo `fs`
- Streams (`pipe()` e `createWriteStream()`)
- Geração de QR Code
- Gerenciamento de dependências com npm

---

## 👨‍💻 Autor

**Gabriel Vieira**

- GitHub: https://github.com/SEU-USUARIO
- LinkedIn: https://www.linkedin.com/in/SEU-LINKEDIN
