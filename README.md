# Messenger Clone

## Running the app yourself

#### Deploy Postgres and GraphQL Engine:
- Clone this repo
- [Install Hasura CLI](https://hasura.io/docs/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)
- Apply the migrations:
  ```bash
  cd hasura 
  hasura migrate apply --endpoint "your endpoint"
  ```

#### Run the auth server

  ```bash
  cd auth-server
  ```

- Set the environment variables in `.env`

- Install and run the app

```bash
  npm install
  npm start
```

#### Run the react app

  ```bash
  cd react-app
  ```

- Set the environment variables in `.env`

```bash
  yarn install
```

- Modify the codegen.yml to include the correct endpoint and headers

- Generate the graphql types by running

```bash
  gql-gen
```
This would generate the required types in `src/graphql/types`

- Run the app

```bash
  yarn start
```
