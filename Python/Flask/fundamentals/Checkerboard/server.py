from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('main.html', times=4)

@app.route('/four')
def byfour():
    return render_template('byfour.html', times=4)

@app.route('/<int:times>/<int:times2>')
def custom(times, times2):
    return render_template('customnum.html', times = int(times), times2 = int(times2))


@app.route('/<int:times>/<int:times2>/<string:color>/<string:color2>')
def colors(times, times2, color, color2):
    return render_template('colors.html', times=int(times), times2=int(times2), color=color, color2=color2)

if __name__ == "__main__":
    app.run(debug=True)