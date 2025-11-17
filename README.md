# Brain Agriculture

Aplicação web desenvolvida com React, TypeScript e Vite para gerenciamento agrícola.

## Tecnologias

### Bibliotecas
- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.2
- Redux Toolkit 2.10.1
- React Router DOM 7.9.6
- Styled Components 6.1.19
- Formik 2.4.9
- Yup 1.7.1
- use-mask-input 3.5.2
- Recharts 3.4.1

### Testes
- Jest 30.2.0
- React Testing Library 16.3.0
- Testing Library User Event 14.6.1
- Testing Library Jest DOM 6.9.1
- ts-jest 29.4.5

### Qualidade de Código
- ESLint 9.39.1 + TypeScript ESLint 8.46.3
- Prettier 3.6.2
- ESLint Plugin Jest 29.1.0
- Husky 9.1.7 (Git Hooks)
- Commitlint 20.1.0

## Configuração do Projeto

### Path Aliases

O projeto utiliza path aliases para facilitar imports:

```typescript
import { App } from '@/App';                    // Raiz do src/
import { Dashboard } from '@dashboard';          // Domínio Dashboard
import { ProducersListPage } from '@producers';  // Domínio Producers
import { Button } from '@shared/ui';             // Componentes compartilhados
import { useProducers } from '@shared/hooks';    // Hooks compartilhados
```

### Redux

Store global configurado em `src/store/`:
- `store/index.ts` - Configuração da store
- `store/hooks.ts` - Hooks tipados (`useAppDispatch`, `useAppSelector`)

Cada domínio possui seu próprio slice isolado (ex: `domains/producers/store/`)

### Testes

Configurado com Jest e React Testing Library:
- Arquivos de teste: `*.test.tsx` ou `*.spec.tsx`
- Todos os testes escritos em português
- ESLint configurado para testes

```bash
yarn test              # Executa todos os testes
yarn test:watch        # Modo watch
yarn test:coverage     # Com relatório de cobertura
```

### Git Hooks (Husky)

Hooks configurados para garantir qualidade do código:

- **pre-commit**: Executa lint antes de cada commit
- **commit-msg**: Valida mensagem de commit usando Commitlint

#### Padrão de Commits (Conventional Commits)

As mensagens de commit devem seguir o formato:

```
type(scope): subject
```

**Tipos válidos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação de código
- `refactor`: Refatoração
- `test`: Adição ou correção de testes
- `chore`: Tarefas de manutenção

**Exemplos:**
```bash
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login bug"
git commit -m "docs: update README"
git commit -m "test: add unit tests for login"
```

## Scripts Disponíveis

```bash
yarn dev            # Inicia servidor de desenvolvimento
yarn build          # Build para produção
yarn preview        # Preview da build
yarn lint           # Executa linter
yarn test           # Executa testes
yarn test:watch     # Testes em modo watch
yarn test:coverage  # Testes com cobertura
```

## Arquitetura

O projeto segue uma arquitetura de **microfrontend-ready** baseada em **Domain-Driven Design (DDD)**.

### Estrutura de Pastas

```
brain-agriculture/
├── src/
│   ├── domains/
│   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   ├── routes.tsx
│   │   │   └── index.ts
│   │   ├── producers/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── store/
│   │   │   ├── routes.tsx
│   │   │   └── index.ts
│   │   └── shared/
│   │       ├── ui/
│   │       │   ├── atoms/
│   │       │   ├── molecules/
│   │       │   ├── templates/
│   │       │   └── navigation/
│   │       ├── lib/
│   │       │   ├── validators/
│   │       │   ├── formatters/
│   │       │   ├── generators/
│   │       │   ├── converters/
│   │       │   └── helpers/
│   │       ├── config/
│   │       ├── hooks/
│   │       └── types/
│   ├── store/
│   ├── routes/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .husky/
├── jest.config.cjs
├── commitlint.config.js
├── eslint.config.js
├── tsconfig.json
└── vite.config.ts
```

## Extensões Recomendadas

- Prettier - Formatação de código
- ESLint - Análise de código

## Desenvolvimento

1. Clone o repositório
2. Instale as dependências: `npm install` ou `yarn`
3. Rode o projeto: `npm run dev` ou `yarn dev`
4. Acesse: `http://localhost:5173`

## Qualidade de Código

O projeto utiliza:
- **ESLint** - Análise estática de código
- **Prettier** - Formatação automática
- **Husky** - Git hooks para garantir padrões
- **Commitlint** - Validação de mensagens de commit
- **Jest** - Testes unitários e de integração
