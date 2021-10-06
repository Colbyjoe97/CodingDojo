from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
mysql = MySQLConnector(app,'loginsdb')


@app.route('/')
def index():
    return render_template('index.html')

@app.route("/login", methods=['post'])
def login():
    query = "SELECT * FROM user"
    user = mysql.query_db(query)

    return render_template("success.html")





app.run(debug=True)