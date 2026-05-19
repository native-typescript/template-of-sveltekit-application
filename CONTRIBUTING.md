# Template of a SvelteKit application

## File structure

- .devcontainer - Configuration of [Development Containers](https://containers.dev);
- .git - Metadata of the [Git](https://git-scm.com) repository;
- .github - Configuration of [GitHub](https://github.com);
- [.gitignore](https://git-scm.com/docs/gitignore);
- [.prettierignore](https://prettier.io/docs/ignore.html);
- [.stylelintignore](https://stylelint.io/user-guide/ignore-code/#files-entirely);
- [.svelte-kit](https://svelte.dev/docs/kit/project-structure#Other-files-.svelte-kit);
- [.vscode](https://code.visualstudio.com/docs/configure/settings#_workspace-settings) - Configuration of [Visual Studio Code](https://code.visualstudio.com);
- build - Files generated during [the build process](https://svelte.dev/docs/kit/building-your-app);
- building - Building code;
  - core - Core modules;
  - index.ts - Index of building code;
  - instances - Instances of the core modules;
- [commitlint.config.ts](https://commitlint.js.org/reference/configuration.html#config-via-file) - Configuration of [commitlint](https://commitlint.js.org);
- [CONTRIBUTING.md](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors);
- development - Development code;
  - core - Core modules;
  - index.ts - Index of development code;
  - instances - Instances of the core modules;
- [eslint.config.ts](https://eslint.org/docs/latest/use/configure/configuration-files) - Configuration of [ESLint](https://eslint.org);
- node_modules - [Node.js](https://nodejs.org) dependencies;
- [package-lock.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json) - [npm](https://www.npmjs.com) lock;
- [package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json) - Configuration of the [Node.js](https://nodejs.org) project;
- [prettier.config.ts](https://prettier.io/docs/configuration) - Configuration of [Prettier](https://prettier.io);
- [README.md](https://en.wikipedia.org/wiki/README);
- [release-it.config.ts](https://github.com/release-it/release-it/blob/main/docs/configuration.md#configuration) - Configuration of [release-it](https://github.com/release-it/release-it);
- source - Source code;
  - client - Client code;
    - core - Core modules;
    - hooks.ts - [SvelteKit](https://kit.svelte.dev) hooks;
    - HTML-templates - [SvelteKit](https://kit.svelte.dev) HTML templates;
      - error - Error HTML template;
      - success - Success HTML template;
    - index.ts - Index of client code;
  - id-of-adapter
  - index.ts - Index of source code;
  - routes - [SvelteKit](https://kit.svelte.dev) routes;
  - server - Server-only code;
    - core - Core modules;
    - entrypoint - Module of entrypoint;
    - hooks.ts - [SvelteKit](https://kit.svelte.dev) hooks;
    - index.ts - Index of server code;
    - instances - Instances of the core modules;
    - loading-functions-of-pages - Loading functions of pages;
  - static-assets - Static assets to be served by the application;
- [stylelint.config.ts](https://stylelint.io/user-guide/configure) - Configuration of [Stylelint](https://stylelint.io);
- [svelte.config.ts](https://svelte.dev/docs/kit/configuration) - [Svelte](https://svelte.dev/) configuration;
- testing - Testing code;
  - core - Core modules;
  - entrypoint-of-testing.ts - Global setup and teardown for tests;
  - index.ts - Index of testing code;
  - instances - Instances of the core modules;
  - tests - General tests;
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) - Configuration of [TypeScript](https://www.typescriptlang.org);
- [vite.config.ts](https://vite.dev/config/) - Configuration of [Vite](https://vitejs.dev);

## Development setup

1. Use a [Development Containers](https://containers.dev)-compatible editor to
   open the project. The editor will automatically set up a development
   environment with all the necessary dependencies and tools;
2. Connect to the development container;

## Developing

### Building

Run

```
npm run build
```

to build the application. The built application will be placed in the `./build` directory.

#### Environment variables

The building process is configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

##### List

- `ADAPTER__NAME`: The name of the adapter to use. The following values are possible:
  - `Node`: Use [the Node.js adapter](https://svelte.dev/docs/kit/adapter-node);
- `HOSTING__BASE_PATH`: Base path under which the application is hosted. Use an empty string for root hosting, or a value that starts with `/` such as `/app`;

### commitlint

[commitlint](https://commitlint.js.org) is used for linting commit messages.

#### Last commit

Run

```
npm run commitlint:check:last
```

to lint the latest commit message.

#### Range of commits

Run

```
npm run commitlint:check:range -- --from=${FROM} --to=${TO}
```

to lint the commit messages in the specified range. The `FROM` and `TO` variables are commit references that specify the range of commits to lint.

### ESLint

[ESLint](https://eslint.org) is used for linting.

#### Checking

Run

```
npm run eslint:check
```

to perform linting. You should also have your editor set up to display the issues in your editor as you code.

#### Fixing

Run

```
npm run eslint:fix
```

to automatically fix linting issues in the codebase where possible.

### Prettier

[Prettier](https://prettier.io) is used for code formatting.

#### Checking

Run

```
npm run prettier:check
```

to perform format checking.

#### Fixing

Run

```
npm run prettier:fix
```

to automatically format the codebase. You should have your editor set up to format on save as well.

### release-it

[release-it](https://github.com/release-it/release-it) is used for creating releases.

#### Running

Run

```
npm run release-it
```

to make a release.

### Starting

#### Build

To start the built application run:

```
npm run start:build
```

The built application must already be built as described in [the "Building" section](#building).

Note that you can only start the built application that was built using the "`Node`" adapter.

#### Development

To start the application in development mode, run:

```
npm run start:development
```

#### Environment variables

Running the application can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

##### List

- `SERVER__BIND__ADDRESS`: Address/interface the internal HTTP server should bind to;
- `SERVER__BIND__PORT__NUMBER`: Port that the internal HTTP server listens on;
- `SERVER__BIND__PORT__TLS__IS_ENABLED`: Whether the internal HTTP server uses TLS. The following values are possible:
  - `no`: TLS is disabled;
  - `yes`: TLS is enabled. Then you must also set the following variables:
    - `SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE` - The certificate of the intermediate CA;
    - `SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE` - The certificate of the server;
    - `SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY` - The private key of the server;

### Stylelint

[Stylelint](https://stylelint.io) is used for style linting.

#### Checking

Run

```
npm run stylelint:check
```

to perform style linting.

#### Fixing

Run

```
npm run stylelint:fix
```

to automatically fix style linting issues in the codebase where possible.

### SvelteKit

[SvelteKit](https://kit.svelte.dev) is used as the web framework.

The project uses a non-standard way of running the build of the application. Instead of relying on the [Node.js](https://nodejs.org) HTTP server generated by [SvelteKit](https://kit.svelte.dev) during the build process, it uses a custom [Node.js](https://nodejs.org) [HTTP server](https://nodejs.org/api/http.html) that uses the handler of an HTTP request generated by [SvelteKit](https://kit.svelte.dev) during the build process. This is done according to [the "custom server" pattern](https://svelte.dev/docs/kit/adapter-node#Custom-server) described in the documentation of [SvelteKit](https://kit.svelte.dev).

This is done for the following reasons:

- Ability to use HTTPS without a [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy);
- Ability to use a custom environment variable for the port the server listens on instead of the standard "`PORT`" variable;
- Ability to keep the whole configuration of the application in a single place;

#### Checking

Run

```
npm run sveltekit:check
```

to perform type checking for all files and, for Svelte files, also additional linting.

### Testing

Tests are using [the native Node.js test runner](https://nodejs.org/api/test.html).

#### Environment variables

Tests can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

##### List

#### Checking

Run

```
npm run test:check
```

to perform testing for all tests.

##### Integration

Integration tests are such that they don't build the application and they do setup some external dependencies before running. They run against the source code directly.

Run

```
npm run test:check:integration
```

to perform testing for integration tests.

##### System

System tests are such that they do build the application. They run against the built application.

Run

```
npm run test:check:system
```

to perform testing for system tests.

##### Unit

Unit tests are such that they don't build the application and they don't setup any external dependencies before running. They run against the source code directly.

Run

```
npm run test:check:unit
```

to perform testing for unit tests.

### TypeScript

[TypeScript](https://www.typescriptlang.org) is used for development.

## Environment variables

The application can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

### List

- `ADAPTER__NAME`: The name of the adapter to use. The following values are possible:
  - `Node`: Use [the Node.js adapter](https://svelte.dev/docs/kit/adapter-node). Then you must also set the following variables:
    - `SERVER__BIND__ADDRESS`: Address/interface the internal HTTP server should bind to;
    - `SERVER__BIND__PORT__NUMBER`: Port that the internal HTTP server listens on;
    - `SERVER__BIND__PORT__TLS__IS_ENABLED`: Whether the internal HTTP server uses TLS. The following values are possible:
      - `no`: TLS is disabled;
      - `yes`: TLS is enabled. Then you must also set the following variables:
        - `SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE` - The certificate of the intermediate CA;
        - `SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE` - The certificate of the server;
        - `SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY` - The private key of the server;
