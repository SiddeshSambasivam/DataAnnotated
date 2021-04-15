---
id: get-started
slug: /
title: Data Annotated
---

<p align="center">
  <img src="/build/img/DataAnnotatedLogo.png" alt="DA Logo"  width="180" height="140" /> 
</p>

## Setup Environment 

1. Clone the repository :
```console
git clone https://github.com/SiddeshSambasivam/DataAnnotated.git
cd ../DataAnnotated
```

2. Create a .env file :
```
touch .env
```

3. Add environment variables to .env. Sample .env file :
```
DB_CONNECT = mongodb+srv://admin:dataannotated123@cluster0.jpypu.mongodb.net/test
TOKEN_SECRET = dataannotated123
```

4. Run npm install if this is the first build or if new packages have been added :
```
npm install
```

5. Run npm start. This command will start a local development server and open up a browser window. Most changes should be reflected live without having to restart the server :
```console
npm start
```


## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## User Interface

<p align="center">
  <img src="/build/img/ui.png" alt="DA Logo"  width="500" height="256" /> 
</p>

## Built With 

- [MongoDB](https://www.mongodb.com)
- [Express.js](https://expressjs.com)
- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)

## Team Members

- [Siddhesh Sambasivam](https://github.com/SiddeshSambasivam)
- [Nhi Mai-Do](https://github.com/n-maido)
- [Ravisha Sharma](https://github.com/ravisha7feb)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) 