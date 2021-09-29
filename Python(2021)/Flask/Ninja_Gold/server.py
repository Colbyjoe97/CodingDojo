from flask import Flask, render_template, redirect, session, request
import random
app = Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

@app.route('/')
def hello_world():
    if 'gold' not in session:
        session['gold'] = 0
    return render_template('index.html')

@app.route('/process_gold', methods=['post'])
def process():
    if request.form['location'] == "farm":
        session['gold'] += random.randrange(10, 21)
    elif request.form['location'] == "cave":
        session['gold'] += random.randrange(5, 11)
    elif request.form['location'] == "house":
        session['gold'] += random.randrange(2, 6)
    elif request.form['location'] == "casino":
        session['gold'] += random.randrange(-50, 50)
    

    return redirect('/')

app.run(debug = True)