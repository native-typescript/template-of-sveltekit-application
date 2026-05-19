# Template of a SvelteKit Application

## Building

Run

```
npm run build
```

to build the application. The built application will be placed in the `./build` directory.

### Environment variables

The building process can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

#### List

- `ADAPTER__SHOULD_BE_USED`: Whether an adapter should be used. The following values are possible:
  - `no`: No adapter is used;
  - `yes`: An adapter is used. Then you must also set the following variables:
    - `ADAPTER__NAME`: The name of the adapter to use. The following values are possible:
- `HOSTING__BASE_PATH`: Base path under which the application is hosted. Use an empty string for root hosting, or a value that starts with a `/` such as `/app`;

## Environment variables

The application can be configured via [environment variables](https://en.wikipedia.org/wiki/Environment_variable).

### Adapter-specific

### List

- `ADAPTER__SHOULD_BE_USED`: Whether an adapter should be used. The following values are possible:
  - `no`: No adapter is used;
  - `yes`: An adapter is used. Then you must also set the following variables:
    - `ADAPTER__NAME`: The name of the adapter to use. The following values are possible:
- `MODE_OF_OPERATION`: The mode of operation of the application. The following values are possible:
  - `dynamic`: The application is operating dynamically;
  - `static`: The application is operating statically;
