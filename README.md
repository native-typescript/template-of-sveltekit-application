# Template of a SvelteKit application

## File structure

- .devcontainer - Configuration of [Development Containers](https://containers.dev);
- [.dockerignore](https://docs.docker.com/reference/dockerfile/#dockerignore-file);
- [.env](https://nodejs.org/api/environment_variables.html#env-files);
- .git - Metadata of the [Git](https://git-scm.com) repository;
- [.gitignore](https://git-scm.com/docs/gitignore);
- [.prettierignore](https://prettier.io/docs/ignore.html);
- [.stylelintignore](https://stylelint.io/user-guide/ignore-code/#files-entirely);
- [.svelte-kit](https://svelte.dev/docs/kit/project-structure#Other-files-.svelte-kit);
- [.vscode](https://code.visualstudio.com/docs/configure/settings#_workspace-settings) - Configuration of [Visual Studio Code](https://code.visualstudio.com);
- build - Files generated during [the build process](https://svelte.dev/docs/kit/building-your-app);
- [commitlint.config.ts](https://commitlint.js.org/reference/configuration.html#config-via-file) - Configuration of [commitlint](https://commitlint.js.org);
- development - Development code;
  - core - Core modules;
  - instances - Instances of the core modules;
- [Dockerfile](https://docs.docker.com/build/concepts/dockerfile/);
- Dockerfile.system.test.ts;
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
    - HTML-templates - [SvelteKit](https://kit.svelte.dev) HTML templates;
      - error - Error HTML template;
      - success - Success HTML template;
    - hooks.ts - [SvelteKit](https://kit.svelte.dev) hooks;
    - instances - Instances of core modules;
  - routes - [SvelteKit](https://kit.svelte.dev) routes;
  - server - Server-only code;
    - core - Core modules;
    - entrypoint - Module of entrypoint;
      - entrypoint-of-source.ts - Base entrypoint for the background code to run (shared by concrete entrypoints);
      - importing-entrypoint - Module for determining and importing the entrypoint to run;
      - running-entrypoint - Module for running the imported entrypoint;
    - hooks.ts - [SvelteKit](https://kit.svelte.dev) hooks;
    - instances - Instances of the core modules;
  - static-assets - Static assets to be served by the application;
- storybook - [Storybook](https://storybook.js.org) configuration;
  - [main.ts](https://storybook.js.org/docs/configure) - Main configuration of [Storybook](https://storybook.js.org);
  - [preview.ts](https://storybook.js.org/docs/configure) - Preview configuration of [Storybook](https://storybook.js.org);
- [stylelint.config.ts](https://stylelint.io/user-guide/configure) - Configuration of [Stylelint](https://stylelint.io);
- [svelte.config.ts](https://svelte.dev/docs/kit/configuration) - [Svelte](https://svelte.dev/) configuration;
- testing - Testing code;
  - core - Core modules;
  - entrypoint-of-testing.ts - Global setup and teardown for tests;
  - instances - Instances of the core modules;
  - tests - General tests;
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) - Configuration of [TypeScript](https://www.typescriptlang.org);
- [vite.config.ts](https://vite.dev/config/) - Configuration of [Vite](https://vitejs.dev);

## Development setup

1. Use a [Development Containers](https://containers.dev)-compatible editor to
   open the project. The editor will automatically set up a development
   environment with all the necessary dependencies and tools;
2. Connect to the development container;

## Environment variables

The application is configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable). You can create a [.env](https://nodejs.org/api/environment_variables.html#env-files) file in the root of the project to set the environment variables.

### List for building

- `ADAPTER__NAME`: The name of the adapter to use. The following values are possible:
  - `Node`: Use [the Node.js adapter](https://svelte.dev/docs/kit/adapter-node);
  - `static`: Use [the static adapter](https://kit.svelte.dev/docs/adapter-static);
- `HOSTING__BASE_PATH`: Base path under which the application is hosted. Use an empty string for root hosting, or a value that starts with `/` such as `/app`;

### List for development

- `SERVER__BIND__ADDRESS`: Address/interface the internal HTTP server should bind to;
- `SERVER__BIND__PORT__NUMBER`: Port that the internal HTTP server listens on;
- `SERVER__BIND__PORT__TLS__IS_ENABLED`: Whether the internal HTTP server uses TLS. The following values are possible:
  - `no`: TLS is disabled;
  - `yes`: TLS is enabled. Then you must also set the following variables:
    - `SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE` - The certificate of the intermediate CA;
    - `SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE` - The certificate of the server;
    - `SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY` - The private key of the server;

### List for source

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
  - `static`: Use [the static adapter](https://kit.svelte.dev/docs/adapter-static);

### List for testing

- `DEBIAN__DOCKER_IMAGE__TAG__DATE`: A part of the Debian Docker image tag to use. This is a date in the format of `YYYYMMDD`;
- `NODE_JS__VERSION`: The version of Node.js to install;

## Developing

### Building

Run

```
npm run build
```

to build the application. The built application will be placed in the `./build` directory.

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

To start the built application without loading the environment variables from the [.env](https://nodejs.org/api/environment_variables.html#env-files) file, run:

```
npm run start:build
```

The built application must already be built as described in [the "Building" section](#building).

##### .env

To start the built application with loading the environment variables from the [.env](https://nodejs.org/api/environment_variables.html#env-files) file, run:

```
npm run start:build:.env
```

#### Development

To start the application in development mode, run:

```
npm run start:development
```

### Storybook

[Storybook](https://storybook.js.org) is used for isolated UI component development and previewing stories.

#### Running

Run

```
npm run storybook
```

to start [Storybook](https://storybook.js.org) on port `6006`.

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

## Production setup

For production, you can use Docker to containerize and run the application.

1. Prepare the Docker image's build arguments:
   - `HOSTING__BASE_PATH`: Base path under which the application is hosted. Use an empty string for root hosting, or a value that starts with `/` such as `/app`.
   - `DEBIAN__DOCKER_IMAGE__TAG__DATE`: A part of the Debian Docker image tag to use. This is a date in the format of `YYYYMMDD`. You can find the available tags on the [Debian Docker Hub page](https://hub.docker.com/_/debian).
   - `NODE_JS__VERSION`: The version of Node.js to install in the Docker image.
2. Build the Docker image using the provided `./Dockerfile` while being in the project's root directory:
   ```bash
   docker build \
    --build-arg HOSTING__BASE_PATH=${HOSTING__BASE_PATH} \
   	--build-arg DEBIAN__DOCKER_IMAGE__TAG__DATE=${DEBIAN__DOCKER_IMAGE__TAG__DATE} \
   	--build-arg NODE_JS__VERSION=${NODE_JS__VERSION} \
   	--tag template-of-sveltekit-application:$(npm pkg get version | tr -d '"') \
   	.
   ```
3. Run the built Docker image.
