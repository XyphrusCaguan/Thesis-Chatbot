# Thesis-Chatbot
## Initial Setup:
This repo currently contains the starter files.

Clone repo and create a virtual environment
```
$ git clone https://github.com/XyphrusCaguan/Thesis-Chatbot.git
$ cd Thesis-Chatbot
$ cd server
$ python3 -m venv venv
$ . venv/Scripts/activate
```
Install dependencies
```
$ (venv) pip install Flask torch torchvision nltk flask-cors nanoid
```
Install nltk package
```
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
Run
```
$ (venv) python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ (venv) python chat.py
```
DEPLOYMENT of backend and frontend
```
# SERVER
$ cd server
$ . venv/Scripts/activate
$ (venv) python app.py
```
# CLIENT and ADMIN
# gitbash inside src folder of admin and client folders
# Thesis-Chatbot\admin\src
# Thesis-Chatbot\client\src
$ npm start
```
Deploy website in port 3000 for client and 3002 for admin in the default browser
```
