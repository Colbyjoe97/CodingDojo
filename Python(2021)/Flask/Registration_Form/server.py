from flask import Flask, flash, redirect, render_template, request
import re
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/register', methods=["POST"])
def register():
    errCount = 0
    if not request.form['fname']:
        flash("First name is required")
        errCount += 1
    elif not re.match("^[a-z A-Z]*$", request.form['fname']):
        flash("First name can only contain letters and spaces")
        errCount += 1
    else:
        fname = request.form['fname']
    
    if not request.form['lname']:
        flash("Last name is required")
        errCount += 1
    elif not re.match("^[a-z A-Z]*$", request.form['lname']):
        flash("Last name can only contain letters and spaces")
        errCount += 1
    else:
        lname = request.form['lname']
    
    if not request.form['email']:
        flash("Email is required")
        errCount += 1
    elif not re.match(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", request.form['email']):
        flash("Email not in correct format")
        errCount += 1
    else:
        email = request.form['email']

    if not request.form['password']:
        flash("Password is required")
        errCount += 1
    elif len(request.form['password']) < 8:
        flash("Password must be at least 8 characters long")
        errCount += 1
    elif not re.match('\d.*[A-Z]|[A-Z].*\d', request.form['password']):
        flash("Password must have at least 1 capital letter and a number")
        errCount += 1
    else:
        password = request.form['password']

    if request.form['confirm_password'] != request.form['password']:
        flash("Passwords don't match")

    if errCount > 0:
        return redirect('/')
    else:
        return render_template('results.html', fname=fname, lname=lname, email=email)


app.run(debug = True)