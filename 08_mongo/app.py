#TangoTangoMangoMongo:Dennis Chen, Robin Han, Imad Belkebeer
#SoftDev pd7
#K#08: Ay Mon, Go Git It From Yer Flask
#3/6/19

from flask import Flask, redirect, url_for, render_template, session, request
import pymongo
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(32)
collection = None

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/display', methods = ["POST"])
def display():
    SERVER_ADDR = request.form['serverid']
    connection=pymongo.MongoClient(SERVER_ADDR)
    db=connection.GarlicHumus
    collection=db.senators
    f = open("senators.json","r")
    data = json.loads(f.read())
    f.close()
    collection.insert_many(data)
    return render_template('newpage.html')

@app.route('/getSenP', methods = ["POST"])
def senParty():
    party = request.form['party']
    people = get_senators_from_party(party)
    return render_template("info.html",info = people)
@app.route('/getSenI', methods = ["POST"])
def senInfo():
    name = request.form["Senator's name"]
    info = get_senator_info(name)
    return render_template("info.html",info = info)

@app.route('/getConI', methods = ["POST"])
def senContact():
    name = request.form["Senator's name"]
    contact = get_contact_info(name)
    return render_template("info.html",info = contact)

@app.route('/getSMI', methods = ["POST"])
def senSocial():
    name = request.form["Senator's name"]
    info = get_social_media_info(name)
    return render_template("info.html",info = info)

@app.route('/getSenS', methods = ["POST"])
def senState():
    state = request.form["State"]
    senators = get_senators_from_state(state)
    return render_template("info.html",info = senators)
    
#---------------------------------------------------------------------------------

def get_senators_from_party(party):
        results = collection.find({"party":party})
        print("Senators from the " + party + " party: ")
        for res in results:
            print(res['person']['name'])
def get_senator_info(person):
    name = str.split(person)
    print("Basic Info of " + name+ " :")
    results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
    for res in results:
        print("Name: " + res['person']['name'])
        print("Gender: " + res['person']['gender'])
        print("Birthday: " + res['person']['birthday'])
        print("Description: " + res['description'])
        print("State: " + res['state'])
    if (results.count() == 0):
        print("Senator Not Found")
def get_contact_info(person):
    name = str.split(person)
    results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
    print("Contact Info of " + person+ " :")
    for res in results:
        print("Email: " + res['extra']['contact_form'])
        print("Fax: " + res['extra']['fax'])
        print("Office Address: " + res['extra']['address'])
    if (results.count() == 0):
        print("Senator Not Found")
def get_social_media_info(person):
    name = str.split(person)
    results = collection.find({"person.firstname":name[0],"person.lastname":name[1]})
    print("Social Media of " + person+ " :")
    for res in results:
        print("Youtube: " + res['person']['youtubeid'])
        print("Twitter: " + res['person']['twitterid'])
        print("Website: " + res['website'])
    if (results.count() == 0):
        print("Senator Not Found")
def get_senators_from_state(state):
    print("Senators from " + state + " :")
    results = collection.find({"state":state})
    for res in results:
        print(res['person']['name'])


if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0")
