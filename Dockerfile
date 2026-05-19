ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
FROM debian:stable-${DEBIAN__DOCKER_IMAGE__TAG__DATE}-slim AS building
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
USER root
RUN useradd -m -s /bin/bash builder
RUN mkdir /home/builder/template-of-sveltekit-application
RUN chown builder:builder /home/builder/template-of-sveltekit-application
RUN apt-get update && apt-get install -y --no-install-recommends curl xz-utils ca-certificates
ARG NODE_JS__VERSION
ENV NODE_JS__VERSION=${NODE_JS__VERSION}
RUN curl -fsSL https://nodejs.org/dist/v${NODE_JS__VERSION}/node-v${NODE_JS__VERSION}-linux-x64.tar.xz -o /tmp/node.tar.xz
RUN tar -xJf /tmp/node.tar.xz -C /tmp
RUN cp -r /tmp/node-v${NODE_JS__VERSION}-linux-x64/* /usr/local/
RUN rm -rf /tmp/node.tar.xz /tmp/node-v${NODE_JS__VERSION}-linux-x64
WORKDIR /home/builder/template-of-sveltekit-application
USER builder
COPY --chown=builder:builder . .
RUN npm clean-install
ENV NODE_OPTIONS="--import=./hook-for-loading-TypeScript/entrypoint-of-hook-for-loading-TypeScript.ts"
ENV ADAPTER__NAME="Node"
ARG HOSTING__BASE_PATH
ENV HOSTING__BASE_PATH=${HOSTING__BASE_PATH}
RUN npm run build
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
FROM debian:stable-${DEBIAN__DOCKER_IMAGE__TAG__DATE}-slim AS running
ARG DEBIAN__DOCKER_IMAGE__TAG__DATE
USER root
RUN useradd -m -s /bin/bash runner
RUN mkdir /home/runner/template-of-sveltekit-application
RUN chown runner:runner /home/runner/template-of-sveltekit-application
RUN apt-get update && apt-get install -y --no-install-recommends curl xz-utils ca-certificates
ARG NODE_JS__VERSION
ENV NODE_JS__VERSION=${NODE_JS__VERSION}
RUN curl -fsSL https://nodejs.org/dist/v${NODE_JS__VERSION}/node-v${NODE_JS__VERSION}-linux-x64.tar.xz -o /tmp/node.tar.xz
RUN tar -xJf /tmp/node.tar.xz -C /tmp
RUN cp -r /tmp/node-v${NODE_JS__VERSION}-linux-x64/* /usr/local/
RUN rm -rf /tmp/node.tar.xz /tmp/node-v${NODE_JS__VERSION}-linux-x64
WORKDIR /home/runner/template-of-sveltekit-application
COPY --chown=runner:runner --from=building /home/builder/template-of-sveltekit-application/build ./build
COPY --chown=runner:runner --from=building /home/builder/template-of-sveltekit-application/hook-for-loading-TypeScript ./hook-for-loading-TypeScript
COPY --chown=runner:runner --from=building /home/builder/template-of-sveltekit-application/package-lock.json ./package-lock.json
COPY --chown=runner:runner --from=building /home/builder/template-of-sveltekit-application/package.json ./package.json
RUN npm clean-install --omit=dev
USER runner
ENV NODE_OPTIONS="--import=./hook-for-loading-TypeScript/entrypoint-of-hook-for-loading-TypeScript.ts"
ENV ADAPTER__NAME="Node"
ENTRYPOINT ["npm", "run", "start:build"]
