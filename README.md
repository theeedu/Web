**📌 CI/CD Pipeline para Aplicação Web**
========================================

**📝 Visão Geral**
------------------

Este projeto implementa uma aplicação web em **Node.js + Express**, integrada a um **pipeline de CI/CD no GitHub Actions**, garantindo automação desde testes até deploy controlado.

* * * * *

**🛠️ Tecnologias Utilizadas**
------------------------------

-   **Backend**: Node.js, Express
-   **Testes**: Jest, Supertest
-   **Qualidade de Código**: ESLint
-   **Contêinerização**: Docker, Docker Compose
-   **CI/CD**: GitHub Actions
-   **Deploy**: GitHub Environments (com aprovação manual)
-   **Notificações**: SMTP via GitHub Actions

* * * * *

**⚙️ Como Executar Localmente**
-------------------------------

1️ - **Clone o repositório**

```
git clone git@github.com:theeedu/Web.git
```

2️ - **Instale as dependências**


```
npm install
```

3️ - **Execute a aplicação**

```
npm start
```

📌 Acesse em `http://localhost:3000`

4️ - **Rodar Testes**


```
npm test
```

5️ - **Executar com Docker**


```
docker-compose up --build
```

* * * * *

**🚀 CI/CD no GitHub Actions**
------------------------------

### **Fluxo**

1.  **CI (Continuous Integration)**

    -   Instala dependências
    -   Linting e testes
    -   Criação de release
    -   Armazenamento de artefatos
2.  **CD (Continuous Deployment)**

    -   **Aprovação manual** via GitHub Environments
    -   Deploy para ambiente de teste
3.  **Notificação**

    -   Envio de e-mail automático em caso de falha

📌 **Configuração do pipeline** no arquivo `.github/workflows/cicd.yml`.

* * * * *

**📜 Configuração de Secrets no GitHub**
----------------------------------------

Adicione os seguintes **secrets** em `Settings > Secrets`:

-   `GITHUB_TOKEN` → Token para criar releases
-   `EMAIL_USER` / `EMAIL_PASS` → Credenciais SMTP

* * * * *

**📌 Conclusão**
----------------

Este projeto automatiza **build, testes e deploy**, garantindo **qualidade, segurança e controle manual no deploy**. 🚀

