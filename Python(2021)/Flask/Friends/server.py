from flask import Flask
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
# connect and store the connection in "mysql"; note that you pass the database name to the function
mysql = MySQLConnector(app,'friendsdb')
# an example of running a query

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    print "#####################################"
    print friends
    print "#####################################"
    return render_template('index.html', all_friends=friends)


# print mysql.query_db("SELECT * FROM users")
app.run(debug=True)