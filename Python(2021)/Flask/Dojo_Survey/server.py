from flask import Flask, render_template, redirect, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def result():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('results.html', name=name, location=location, language=language, comment=comment)



app.run(debug = True)