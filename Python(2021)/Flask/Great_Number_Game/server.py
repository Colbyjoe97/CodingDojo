from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'



@app.route('/')
def hello_world():
    if 'number' not in session:
        session['number'] = random.randrange(0, 101)
    return render_template('index.html')


@app.route('/guess', methods=["post"])
def guess():
    session['guess'] = int(request.form['guess'])
    if session['guess'] == session['number']:
        session['color'] = "green"
        session['response'] = "You got it!"
    else:
        if int(session['guess']) > int(session['number']):
            session['response'] = "Too high!"
        else:
            session['response'] = "Too low!"
        session['color'] = "red"
    return redirect("/")


@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

app.run(debug = True)