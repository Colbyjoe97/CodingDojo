from flask import Flask, render_template, redirect, request, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
@app.route('/')
def index():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template("index.html", count=session['count'])

@app.route('/two')
def two():
    session['count'] += 1
    return redirect('/')


@app.route('/destroy')
def destroy():
    del session['count']
    return redirect("/")




if __name__ == "__main__":
    app.run(debug=True)