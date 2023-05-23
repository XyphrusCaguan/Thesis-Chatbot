import copy
import datetime
import json
import ast
import random
import bson
from bson.json_util import dumps
from chat import get_response
from flask import Flask, jsonify, redirect, render_template, request, url_for
from flask_cors import CORS
from flask_pymongo import PyMongo
from nanoid import generate
from pymongo import MongoClient
from collections import defaultdict

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

client = MongoClient("mongodb+srv://atlasAdmin:NhU489X0UTZKanpY@cluster0.xhpcpun.mongodb.net/?retryWrites=true&w=majority")
# getting database
db = client['test-database']
# append the created collections here

# app.config["MONGO_URI"] = "mongodb://localhost:27017/Learning"
# mongo = PyMongo(app)


@app.post("/predict", strict_slashes=False)
def predict():
    collection = request.json['title']
    body = request.json['body']
    print("Input: ", body)
    # TODO: check if text is valid
    response = get_response(body)
    message = {"id": generate(), "answer": response, "input": body}
    print("Output: ", message)
    newMessage = copy.copy(message)
    # create/connect collection
    posts = db[collection]
    post_id = posts.insert_one(newMessage)
    print("Output: ", message)
    print("Post in Database: ", post_id)
    return jsonify(message)

@app.route("/reports")
def getData():
    
    mylist = []
    # main dictionary
    dictData = {} 
    # temp list
    listData = []
    # get list of collection
    getCollection = db.list_collection_names()
    print("List of Collections", getCollection)
    for collect in getCollection:
        col = db[collect]
        x = col.find()
        for data in x:
            data.pop('_id', None)
            data['user'] = collect
            print(data)
            mylist.append(data)
    
    return mylist
    
    

if __name__ == "__main__":
    app.run(debug=True)