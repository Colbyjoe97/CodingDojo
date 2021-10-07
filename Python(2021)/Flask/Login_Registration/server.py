from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import md5
import re
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
mysql = MySQLConnector(app,'loginsdb')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/register', methods=['post'])
def register():
    errCount = 0
    if not request.form['first_name']:
        flash("First name is required")
        errCount += 1
    elif not re.match("^[a-zA-Z]*$", request.form['first_name']):
        flash("First name can only contain letters")
        errCount += 1
    elif len(request.form['first_name']) < 2:
        flash("First name must be at least 2 characters long")
        errCount += 1

    if not request.form['last_name']:
        flash("Last name is required")
        errCount += 1
    elif not re.match("^[a-zA-Z]*$", request.form['last_name']):
        flash("Last name can only contain letters")
        errCount += 1
    elif len(request.form['last_name']) < 2:
        flash("Last name must be at least 2 characters long")
        errCount += 1

    if not request.form['email']:
        flash("Email is required")
        errCount += 1
    elif not re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", request.form['email']):
        flash("Email not in correct format")
        errCount += 1

    if not request.form['password']:
        flash("Password is required")
        errCount += 1
    elif len(request.form['password']) < 8:
        flash("Password must be at least 8 characters long")
        errCount += 1

    if request.form['confirm_password'] != request.form['password']:
        flash("Passwords don't match")
        errCount += 1

    if errCount == 0:
        query = "INSERT INTO user (first_name, last_name, email, password, password_confirmation, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, :password_confirmation, NOW(), NOW())"

        password = md5.new(request.form['password']).hexdigest()

        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': password,
            'password_confirmation': password
        }
        mysql.query_db(query, data)
        print data

    return redirect('/')



@app.route("/login", methods=['post'])
def login():
    query = "SELECT * FROM user"
    users = mysql.query_db(query)
    password = md5.new(request.form['password']).hexdigest()
    session['current_user'] = ""
    for user in users:
        if user['email'] == request.form['email']:
            if password == user['password']:
                session['current_user'] = user
                break
    if session['current_user'] == "":
        flash("Email or password incorrect")
        return redirect('/')

    return redirect("/success")

@app.route('/success')
def success():
    return render_template("success.html")



app.run(debug=True)