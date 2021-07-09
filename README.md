# Casiibro_Test

#### Casiibro Test is a Node.js server test to make request on StreamElements API, and update users points.

## Documentation

This documentation is up to date with version "1.0.0".

## About

The web server was made with Node.js for back (like API) and HTML page (with JS and CSS) for front. When you run the app locally, it is going open port 8080 for http, on your system.


   
-----------------  
## Configuration

**Create file _.env_:**

- Need to create _.env_ file in the same directory where you downloaded and placed _casiibro_SE_points.exe_. This file is not in Git repo because it contains confidential information.
- Add this values in the file : OWNER_CHANNEL_SE_ID, POINTS_BET and SE_TOKEN.
    - OWNER_CHANNEL_SE_ID is your StreamElements account ID findable here : [SE Account settings](https://streamelements.com/dashboard/account/channels).
    - POINTS_BET is the default StreamElements bet for this program. It is an integer.
    - SE_TOKEN is your StreamElements JWT token findable here : [SE Account settings](https://streamelements.com/dashboard/account/channels).

The file looks like (_not true values, it is just an example_) : ![.env_picture](https://i.ibb.co/C8cYTGz/image-2021-07-09-160638.png)

## Getting started

**Download app :**

To use this project on your computer, just check [releases](https://github.com/YoNeXia/Casiibro_Test/releases) and find .exe app.

**How to initialize the web server :**

After realize the configuration in file .env, simply run the _casiibro_se_points.exe_ file. This one permit deploying web server on any computer. Find the web page at this [address](http://localhost:8080). If not and you did not succeed, please contact support.



**Making development :**

If you modify code, you can use commands to run app on your computer. This command is using to simulate same usage as on a server :

    npm start

To modify code and make tests at same time, use this command running nodemon :

    npm test

## Authors

- **YoNeXia** - _Initial Work_ - [GitLab](https://gitlab.com/YoNeXia) or [GitHub](https://github.com/YoNeXia).
