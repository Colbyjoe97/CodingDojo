from flask import Flask, flash, redirect, render_template, request
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/result', methods=["POST"])
def result():
    if not request.form['name']:
        flash("Name is required!")
        return redirect("/")
    if not request.form['location']:
        flash("Dojo location is required!")
    if not request.form['language']:
        flash("Favorite language is required!")
    else:
        flash("Success! You submitted the form!")

        
    if len(flash) > 1:
        return redirect("/")
    else:
        return render_template("/result.html")

app.run(debug = True)