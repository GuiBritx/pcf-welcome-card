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

# 🧠 Entendendo a Arquitetura do Projeto

## O que é Power Apps?

Power Apps é uma plataforma da Microsoft para criação de aplicações corporativas utilizando uma abordagem low-code.

Normalmente, as aplicações são desenvolvidas através do Canvas App, utilizando componentes visuais como:

- Botões
- Labels
- Galerias
- Formulários
- Comboboxes

Essa abordagem acelera o desenvolvimento, porém pode apresentar limitações para cenários mais complexos, especialmente quando há necessidade de:

- Componentes reutilizáveis
- Interfaces altamente customizadas
- Experiências modernas de usuário
- Lógicas avançadas de interação
- Estruturas de código organizadas

---

## O que é PCF?

PCF significa **Power Apps Component Framework**.

O PCF permite desenvolver componentes personalizados utilizando tecnologias tradicionais de desenvolvimento web, como:

- TypeScript
- HTML
- CSS
- JavaScript

Com isso, é possível criar controles que podem ser reutilizados dentro do Power Apps da mesma forma que um botão ou uma galeria nativa.

Exemplos de componentes que podem ser criados:

- Cards personalizados
- Dashboards
- Gráficos
- Calendários
- Tabelas avançadas
- Filtros inteligentes
- Componentes de busca
- Interfaces responsivas

---

## O que é o GitHub Copilot neste projeto?

O GitHub Copilot atua como um assistente de desenvolvimento baseado em Inteligência Artificial.

Ele auxilia em atividades como:

- Geração de código
- Refatoração
- Criação de componentes
- Correção de erros
- Explicação de código
- Sugestões de arquitetura

Neste projeto o Copilot é utilizado para acelerar o desenvolvimento do componente e permitir uma iteração rápida de novas ideias.

---

## O que é o Live Preview?

Uma das funcionalidades mais interessantes desta arquitetura é o Live Preview.

Ao executar:

```powershell
yarn.cmd start:watch
```

o PCF entra em modo de observação.

O fluxo se torna:

```text
Editar código
        ↓
Salvar arquivo
        ↓
Build automático
        ↓
Atualização automática do preview
```

Ou seja, não é necessário recompilar manualmente a cada alteração.

Essa experiência é muito semelhante ao desenvolvimento moderno de aplicações React e outros frameworks frontend.

---

## Fluxo de Desenvolvimento Utilizado

```text
Power Apps Component Framework (PCF)
                +
         TypeScript
                +
       GitHub Copilot
                +
       VS Code Editor
                +
      Start Watch Mode
                ↓
      Live Preview Local
```

---

## Por que esta abordagem?

O objetivo é explorar um modelo híbrido entre Low-Code e Pro-Code.

Benefícios:

✅ Componentes reutilizáveis

✅ Melhor organização de código

✅ Versionamento com Git

✅ Desenvolvimento assistido por IA

✅ Maior escalabilidade

✅ Interfaces mais modernas

✅ Menor repetição de lógica

✅ Melhor experiência de usuário

---

## O que este projeto demonstra?

Este repositório demonstra como utilizar Power Apps além dos limites tradicionais de um Canvas App, combinando:

- Power Platform
- PCF
- TypeScript
- GitHub Copilot
- Desenvolvimento baseado em componentes

para criar uma experiência mais próxima do desenvolvimento frontend profissional.

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
