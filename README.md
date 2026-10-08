# 🚀 WelcomeCard PCF

Meu primeiro projeto utilizando o **Power Apps Component Framework (PCF)** para desenvolvimento de componentes customizados para Microsoft Power Apps.

Este repositório foi criado com o objetivo de estudar e praticar:

- Desenvolvimento de componentes PCF
- TypeScript
- Integração com Power Apps
- Git e GitHub
- Desenvolvimento assistido por IA utilizando GitHub Copilot
- Hot Reload com Yarn

---

# 📖 O que é este projeto?

O projeto contém um componente customizado chamado **WelcomeCard**, desenvolvido utilizando o Power Apps Component Framework (PCF).

Atualmente o componente exibe uma interface moderna construída em TypeScript e pode ser executado localmente através do PCF Test Harness.

---

# 🛠 Tecnologias Utilizadas

## Microsoft Power Apps Component Framework (PCF)

Framework utilizado para criar controles customizados para aplicações Power Apps.

## TypeScript

Linguagem principal do desenvolvimento do componente.

## Yarn

Gerenciador de dependências utilizado no lugar do npm.

## Power Platform CLI (PAC CLI)

Ferramenta utilizada para criar, compilar e testar componentes PCF.

## Git

Controle de versão do projeto.

## GitHub Copilot

Assistente de desenvolvimento utilizado para acelerar a criação e evolução dos componentes.

---

# 📂 Estrutura do Projeto

```text
MeuPrimeiroComponente
│
├── WelcomeCard
│   ├── ControlManifest.Input.xml
│   └── index.ts
│
├── package.json
├── tsconfig.json
├── pcfconfig.json
├── eslint.config.mjs
├── MeuPrimeiroComponente.pcfproj
└── yarn.lock
```

---

# ✅ Pré-requisitos

Antes de executar este projeto, certifique-se de possuir:

### Node.js

Versão recomendada:

```text
Node.js 22 LTS ou superior
```

### Yarn

Verificar instalação:

```powershell
yarn.cmd --version
```

### Power Platform CLI

Verificar instalação:

```powershell
pac --version
```

### Visual Studio Code

Recomendado para edição e desenvolvimento.

### Git

Verificar instalação:

```powershell
git --version
```

---

# ⚙️ Instalação

Clone o repositório:

```powershell
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```powershell
cd MeuPrimeiroComponente
```

Instale as dependências:

```powershell
yarn.cmd install
```

---

# ▶️ Executar o Projeto

Iniciar modo desenvolvimento:

```powershell
yarn.cmd start:watch
```

Esse comando:

- Monitora alterações nos arquivos
- Recompila automaticamente
- Atualiza o Test Harness em tempo real

---

# 🔨 Build Manual

Para gerar um build manual:

```powershell
yarn.cmd build
```

Os arquivos compilados serão gerados em:

```text
out/
└── controls/
    └── WelcomeCard/
```

Exemplo:

```text
out
└── controls
    └── WelcomeCard
        ├── bundle.js
        └── ControlManifest.xml
```

---

# 🧹 Limpar Arquivos Gerados

```powershell
yarn.cmd clean
```

---

# 🔍 Executar Linter

```powershell
yarn.cmd lint
```

---

# 🔧 Corrigir Problemas de Lint Automaticamente

```powershell
yarn.cmd lint:fix
```

---

# 🔄 Rebuild Completo

```powershell
yarn.cmd rebuild
```

---

# 📚 Fluxo de Desenvolvimento

1. Abrir o projeto no VS Code

```powershell
code .
```

2. Executar:

```powershell
yarn.cmd start:watch
```

3. Editar os arquivos:

```text
WelcomeCard/index.ts
```

4. Salvar

```text
CTRL + S
```

5. O projeto será recompilado automaticamente

---

# 📝 Aprendizados deste Projeto

Durante o desenvolvimento foram praticados:

- Criação de componentes PCF
- Estrutura de projetos TypeScript
- Utilização de Yarn
- Uso do GitHub Copilot para acelerar desenvolvimento
- Hot Reload para desenvolvimento local
- Integração com Power Platform CLI
- Versionamento utilizando Git e GitHub

---

# 🚧 Próximos Passos

Planejamento para evolução do projeto:

- [ ] Integração com React
- [ ] Integração com Fluent UI
- [ ] Employee Profile Card
- [ ] Configurações via propriedades PCF
- [ ] Publicação em ambiente Power Apps
- [ ] Integração com Dataverse
- [ ] Componentes reutilizáveis

---

# 👨‍💻 Autor

**Guilherme Brito Pinheiro**

UX/UI Designer • Power Platform Developer • PCF Learner

---

# 📌 Status do Projeto

✅ Ambiente configurado

✅ Build funcionando

✅ Hot Reload funcionando

✅ Versionamento Git

✅ Primeiro componente criado

🚧 Evolução contínua
