from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojos/new')
def dojos():
    return render_template('new.html')

app.run(debug = True)