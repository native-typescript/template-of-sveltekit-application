# Template of a SvelteKit application

## Building

Run

```
npm run build
```

to build the application. The built application will be placed in the `./build` directory.

### Environment variables

The building process can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

#### List

- `ADAPTER__NAME`: The name of the adapter to use. The following values are possible:
  - `Node`: Use [the Node.js adapter](https://svelte.dev/docs/kit/adapter-node);
  - `static`: Use [the static adapter](https://kit.svelte.dev/docs/adapter-static);
- `HOSTING__BASE_PATH`: Base path under which the application is hosted. Use an empty string for root hosting, or a value that starts with a `/` such as `/app`;

## Environment variables

The application can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

### Adapter-specific

#### Node adapter

For the Node adapter, you need to provide the environment variables when starting the built application.

##### List

- `SERVER__BIND__ADDRESS`: Address/interface the internal HTTP server should bind to;
- `SERVER__BIND__PORT__NUMBER`: Port that the internal HTTP server listens on;
- `SERVER__BIND__PORT__TLS__IS_ENABLED`: Whether the internal HTTP server uses TLS. The following values are possible:
  - `no`: TLS is disabled;
  - `yes`: TLS is enabled. Then you must also set the following variables:
    - `SERVER__BIND__PORT__TLS__INTERMEDIATE_CA__CERTIFICATE` – The certificate of the intermediate CA;
    - `SERVER__BIND__PORT__TLS__SERVER__CERTIFICATE` – The certificate of the server;
    - `SERVER__BIND__PORT__TLS__SERVER__PRIVATE_KEY` – The private key of the server;

#### Static adapter

For the static adapter, you need to provide the environment variables when building the application.

##### List

### List

## Starting

To start the built application run:

```
npm run start:build
```

The built application must already be built as described in [the "Building" section](#building).

Note that you can only start the built application that was built using the Node adapter.
