# Syrene-Chatbot-Thesis
It has always been a conundrum for most people to reach out when it comes to mental health related problems due to the negative stigma society has created. Since the majority prefer to communicate digitally rather than in person, the researchers created a chatbot that can accommodate this dilemma. 

Thus, “Sereniteam” intends to create a system that makes use of Natural Language Processing (NLP). It can help mental health professionals assist their patients who are experiencing mental health issues, especially those who are having difficulty interacting with others. 

## Group Members

- Gene Caleb C. Carbonilla
- Xyphrus Von Keith C. Caguan
- Joshreen D. Reyes
- Jirah Kate C. Solano

## Initial Setup:
This repo currently contains the starter files.

Clone repo and create a virtual environment
```
$ git clone https://github.com/XyphrusCaguan/Thesis-Chatbot.git
$ cd Thesis-Chatbot/src/server
$ python3 -m venv venv
$ . venv/Scripts/activate
```
Install dependencies
```
$ (venv) pip install -r requirements.txt 
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
DEPLOYMENT of BACKEND: <br/>
#Server
```
$ cd Thesis-Chatbot/src/server
$ . venv/Scripts/activate
$ (venv) python app.py
```
DEPLOYMENT of FRONTEND: <br/>
#Admin
```
$ cd Thesis-Chatbot\src\admin\src
$ npm start
```
#Client
```
$ cd Thesis-Chatbot\src\admin\src
$ npm start
```

_Copyright ©2023_
