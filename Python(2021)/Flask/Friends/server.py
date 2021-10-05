from flask import Flask, render_template, redirect, request
from mysqlconnection import MySQLConnector
app = Flask(__name__)

mysql = MySQLConnector(app, 'mydb')

@app.route('/')
def hello_world():
    return render_template('index.html')





print(mysql.query_db("SELECT * FROM users"))
app.run(debug = True)