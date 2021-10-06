from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
mysql = MySQLConnector(app,'emaildb')


@app.route('/')
def index():
    
    return render_template('index.html')

@app.route("/submit", methods=['post'])
def submit():
    query = "SELECT * FROM email"
    emails = mysql.query_db(query)
    if not re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", request.form['email']):
        flash("Email not in correct format!")
        return redirect("/")
    for email in emails:
        if email['email'] == request.form['email']:
            flash("Email already taken!")
            return redirect('/')
        print email['email']

    query = "INSERT INTO email (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"

    data = {
        'email': request.form['email']
    }
    mysql.query_db(query, data)

    query = "SELECT * FROM email"
    emails = mysql.query_db(query)
    recentEmail = request.form['email']
    return render_template("success.html", emails=emails, recent=recentEmail)


app.run(debug=True)