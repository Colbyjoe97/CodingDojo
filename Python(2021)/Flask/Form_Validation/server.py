from flask import Flask, flash, redirect, render_template, request
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/result', methods=["POST"])
def result():
    if len(request.form['comment']) > 120:
        flash("Comment cannot be more than 120 characters.")
    if not request.form['name']:
        flash("Name is required!")
        return redirect("/")
    else:
        name = request.form['name']
        location = request.form['location']
        language = request.form['language']
        comment = request.form['comment']
        return render_template('result.html', name=name, location=location, language=language, comment=comment)


app.run(debug = True)