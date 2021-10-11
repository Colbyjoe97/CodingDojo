from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
import md5
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
mysql = MySQLConnector(app,'wallsdb')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/register', methods=['POST'])
def create():
    errCount = 0
    if not request.form['first_name']:
        flash("First name is required")
        errCount += 1
    elif not re.match("^[a-z A-Z]*$", request.form['first_name']):
        flash("First name can only contain letters and spaces")
        errCount += 1

    if not request.form['last_name']:
        flash("Last name is required")
        errCount += 1
    elif not re.match("^[a-z A-Z]*$", request.form['last_name']):
        flash("Last name can only contain letters and spaces")
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

    if request.form['password_confirmation'] != request.form['password']:
        flash("Passwords don't match")
        errCount += 1

    if errCount == 0:
        password = md5.new(request.form['password']).hexdigest()

        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"

        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': password
        }
        mysql.query_db(query, data)
        return render_template("wall.html")

    return redirect('/')

@app.route("/login", methods=["POST"])
def login():
    query = "SELECT * FROM users"
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
    else:
        return redirect("/wall")


@app.route('/create_message', methods=['POST'])
def create_message():
    if not request.form['message']:
        flash("Message is required")
    else:
        query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"

        data = {
            'user_id': session['current_user']['id'],
            'message': request.form['message']
        }
        mysql.query_db(query, data)
    return redirect("/wall")

@app.route("/wall")
def wall():
    current_user = session['current_user']
    messages = mysql.query_db('SELECT users.first_name, users.last_name, messages.id, messages.message, messages.created_at, messages.updated_at FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at ASC;')
    return render_template("wall.html", current_user=current_user, messages=messages)

@app.route('/comment', methods=['POST'])
def make_comment():
    # comment = request.form['comment']
    # messages_id = request.form['messages_id']
    if len(comment) > 0:
        query = "INSERT INTO comments (users_id, messages_id, comment, created_at, updated_at) VALUES (:user_id, :messages_id, :comment, NOW(), NOW())"
        data = {
            'user_id': session['id'],
            'comment': comment,
            'messages_id': messages_id,
        }
        mysql.query_db(query, data)
    return redirect('/wall')

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


app.run(debug=True)