#Team YaThatWasABanana: Dennis Chen & Imad Belkebeer                           
#SoftDev pd7                                                                   
#K #07: Import/Export Bank                                 
#3/1/19

'''
The dataset we used was the pokedex json file containing information on all the 1st generation pokemon
https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json
We imported the data by using the os libary to run the command that puts the information from the json
file into the database.
'''

import pymongo
import os
from pymongo import MongoClient
os.system("mongoimport --db YaThatWasABanana --collection pkmn --drop --file pokedex.json")
client = MongoClient()
SERVER_ADDR = "204.48.19.94"
connection = MongoClient(SERVER_ADDR)
db = connection.YaThatWasABanana
collection = db.pkmn
#gets the list of all the pokemon and some of their info
pokemon = collection.find()[0]['pokemon']
names = {}
ids = {}
#for each pokemon, the name and id are coupled as key-value pairs in both ways
for pkmn in pokemon:
    name = pkmn['name'].encode('ascii','ignore')
    names[name] = pkmn['id']
    ids[pkmn['id']] = name

#returns the id given the name of the pokemon
def getId(name):
    return names[name]

#returns the name given the id of the pokemon
def getName(id):
    return ids[id]
#returns pokemon with weakness of element
def getWeakness(element):
    pok = []
    for poke in pokemon:
        if element in poke['weaknesses']:
            pok.append(poke['name'])
    return pok
print(getName(21))
print(getId("Pikachu"))
print(getWeakness('Fire'))
