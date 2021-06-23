from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' #A secret key for security purposes, can be anything I want
@app.route('/')
def index():
    return render_template("index.html")

# @app.route('/users', methods=['POST']) <-- You can do this if not creating a session
# def create_user():
#     print("Got Post Info")
#     print(request.form)
#     name_from_form = request.form['name']
#     email_from_form = request.form['email']
#     return render_template("show.html", name_on_template=name_from_form, email_on_template=email_from_form)


@app.route('/users', methods=['POST']) # <-- Do this if creating a session to store data
def create_user(): # <-- This also allows us to refresh the page without resubmitting the form and saving our info
    print("Got Post Info")
    # Here we add two properties to session to store the name and email, can store other things like comments too
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    return redirect('/show')


@app.route('/show') # <-- Access the name and email from user input
def show_user():
    return render_template('show.html', name_on_template=session['username'], email_on_template=session['useremail'])


if __name__ == "__main__":
    app.run(debug=True)
