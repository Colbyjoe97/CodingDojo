from flask import Flask, render_template, redirect
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "No Ninjas Here!"

@app.route('/ninja')
def ninjas():
    return render_template('ninjas.html')

@app.route('/ninja/<color>')
def one_ninja(color):
    return render_template('one.html', color=color)


app.run(debug = True)