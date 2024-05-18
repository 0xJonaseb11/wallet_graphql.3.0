# wallet_graphql.3.0

## About

Get real world data related to events triggered relating wallet contract with graphql protocol

## Getting started

`Installation`

```sh
# install client
yarn add -D @graphprotocol/client-cli
# or, with NPM:
npm install --save-dev @graphprotocol/client-cli

# install graph-ts
npm install --save @graphprotocol/graph-ts
```

### `Subgraph deployment`

```sh
# aunthenticate first
graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>
# actual deployment
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>

```

## `After setting the development structure correctly,`

`build protocol to generate ready to use js code for you`

```sh
# Option one
graphclient build # Note that for linux users (with me too) this didn't work till i used this below

# option two
# Generate code # Worked for me unlike the above
graph codegen 
```

### `For client intentions,`

```sh
# install @apollo-client
npm install @apollo/client graphql

------------

@0xJonaseb11
