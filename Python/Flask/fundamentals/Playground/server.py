from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html', times=1)

@app.route('/<anything>')
def notfound(anything):
    return "Sorry, page not found"

@app.route('/play/<int:times>')
def boxes(times):
    return render_template('index.html', times=int(times))

@app.route('/play')
def threebox():
    return render_template('index.html', times=3)


@app.route('/play/<int:times>/<string:color>')
def boxcolor(times, color):
    return render_template('index.html', times=int(times), color=color)

if __name__ == "__main__":
    app.run(debug=True)