# Feedback Widget

![Badge](https://img.shields.io/static/v1?label=author&message=DanielHessel&color=0070f3&style=flat&logo=<LOGO>)
![Badge](https://img.shields.io/static/v1?label=status&message=Done&color=success&style=flat&logo=<LOGO>)
![Badge](https://img.shields.io/static/v1?label=license&message=MIT&color=0070f3&style=flat&logo=<LOGO>)

Feedback widget for collecting feedback on websites developed during Rocketseat's NLW Return using ReactJs, Vite and Tailwindcss.
The project was also developed with accessibility in mind, and to make this work easier we used components from the headless ui that already has keyboard navigation ready.

## :pushpin: Table of contents
<!--ts-->
   * [Features](#features)
   * [Technologies](#zap-technologies)
      * [Code standards](#balloon-code-standards)
   * [Application demo](#triangular_flag_on_post-application-demo)
      * [Cloud infrastructure](#cloud-cloud-infrastructure)
   * [Getting started](#computer-getting-started)
   * [How to run](#information_source-how-to-run)
   * [How to contribute to the project](#tada-how-to-contribute-to-the-project)
   * [License](#page_facing_up-license)
<!--te-->

## Features

  - [x] Envio de feedbacks
  - [x] Captura de tela para anexar ao feedback (bastante utilizado no caso de bugs)

## :zap: Technologies

This project was developed with the following technologies:

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.dev/)

#### :balloon: Code standards

- [EditorConfig](https://editorconfig.org/)

## :triangular_flag_on_post: Application demo

You can test the project at this url: [https://feedback-widget-alpha.vercel.app/](https://feedback-widget-alpha.vercel.app/).

#### :cloud: Cloud infrastructure

- [Vercel](https://vercel.com/):
   Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.

- [Railway](https://railway.app/):
   The project's backend is deployed on Railway, a deployment infrastructure for any type of application as simple as vercel

## :computer: Getting started

Before you begin, you will need to have the following tools installed on your machine:
- [Git](https://git-scm.com)

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

Npm is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer.
- [Node.js v16.14.2](https://nodejs.org/) or heigher.

Yarn is a package manager created by the Facebook team and seems to be faster than npm in general.
- [Yarn v1.22.18](https://yarnpkg.com/) or heigher.

The project uses a database (Postgres), it is necessary to have it on your machine so that you can run it. If not, I suggest using Docker to run a container with the postgres image. [Click here to install Docker](https://docs.docker.com/engine/install/).

How I created my postgres container locally:
```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

Also, it’s good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

## :information_source: How to run

Follow the instructions below to download and use the project from this repository:

> You can use yarn or npm as package manager to run this project, but preferably I use yarn.

Clone this repository using SSH:
```bash
git clone git@github.com:danielhessell/feedback-widget.git
```

or clone using https:
```bash
git clone git@github.com:danielhessell/feedback-widget.git
```

Go to project folder in terminal/cmd:
```bash
cd feedback-widget
```

#### Backend

Go to server folder in terminal/cmd:
```bash
cd server
```

Install dependencies:
```bash
yarn
```

Run migrations
```bash
yarn prisma migrate dev
```

Run project:
```bash
yarn dev
```

The server will start on port 3333. Go to http://localhost:3333

#### Frontend

Go to web folder in terminal/cmd:
```bash
cd web
```

Install dependencies:
```bash
yarn
```

Run project:
```bash
yarn dev
```

The server will start on port 3000. Go to http://localhost:3000

## :tada: How to contribute to the project

1. Fork the project
2. Create a new branch with your changes: ```git checkout -b my-feature```
3. Save the changes and create a commit message telling what you've done: ```git commit -m "feature: My new feature"```
4. Submit your changes: ```git push origin my-feature```

Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions).

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://github.com/danielhessell/feedback-widget/blob/master/LICENSE) file for more details.

---
Made with :blue_heart: by Daniel Hessel.
