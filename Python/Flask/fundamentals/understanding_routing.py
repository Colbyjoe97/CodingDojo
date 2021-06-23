from flask import Flask
app = Flask(__name__)

@app.route('/<anything>')
def notFound(anything):
    return 'Sorry! No response. Please try again.'

@app.route('/')
def hello():
    return 'Hello World'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<hello>')
def say(hello):
    return f"Hello {hello}"

@app.route("/repeat/<string>/<int:num>")
def teamChamps(string, num):
    print("*"*num)
    print(string)
    return f"{string}\n" * num

if __name__ == "__main__":
    app.run(debug=True)



