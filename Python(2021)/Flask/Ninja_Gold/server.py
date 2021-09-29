from flask import Flask, render_template, redirect, session, request
from random import randint
app = Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

@app.route('/')
def hello_world():
    if 'gold' not in session:
        session['gold'] = 0
    if 'activities' not in session:
        session['activities'] = []
    else:
        session['activities'].reverse()
    return render_template('index.html')

@app.route('/process_gold', methods=['post'])
def process():
    if request.form['location'] == "farm":
        int = randint(10, 21)
        session['gold'] += int
        session['activities'].append({
            'gold': int,
            'location': 'Farm',
        })

    elif request.form['location'] == "cave":
        int = randint(5,10)
        session['gold'] += int
        session['activities'].append({
            'gold': int,
            'location': 'Cave',
            'status': 'good'
        })
    elif request.form['location'] == "house":
        int = randint(2,5)
        session['gold'] += int
        session['activities'].append({
            'gold': int,
            'location': 'House',
            'status': 'good'
        })

    elif request.form['location'] == "casino":
        int = randint(-50, 50)
        if int >= 0:
            status = "good"
        else:
            status = "bad"
        session['gold'] += int
        session['activities'].append({
            'gold': int,
            'location': 'Casino',
            'status': status
        })

    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

app.run(debug = True)