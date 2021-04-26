<p align="center">
  <img src="./assets/logo.png" alt="DA Logo"  width="180" height="140" /> 
</p>
<h1 align='center' style='font-weight:bold'>
    DataAnnotated
</h1>
<p align="center">
    <img src="https://camo.githubusercontent.com/3dbcfa4997505c80ef928681b291d33ecfac2dabf563eb742bb3e269a5af909c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765" alt="GitHub license" />  
    <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
    <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>    
    <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>    
    <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
</p>

DataAnnotated is a platform which offers various data annotation task with easy collaboration with peers. The platform creates a seamless integration between data in annotation and data used in development. This way the developer can keep track of the annotated data while in development with no need for manually checking the annotated data every once in a while.

A complimentary python package is developed connecting their user profile during development. In this way, they could annotate their data and download it from the package during development.

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


