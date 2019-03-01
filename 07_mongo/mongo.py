#Team YaThatWasABanana: Dennis Chen & Imad Belkebeer                           
#SoftDev pd7                                                                   
#K #07: Import/Export Bank                                 
#3/1/19                                                                       
import pymongo
import os
from pymongo import MongoClient
os.system("mongod -v --bind_ip_all --noauth --dbpath /data/db")
os.system("mongoimport --db YaThatWasABanana --collection pkmn --drop --file /data/db/pokedex.json")
client = MongoClient()
SERVER_ADDR = "204.48.19.94"
connection = MongoClient(SERVER_ADDR)
db = connection.YaThatWasABanana
collection = db.pkmn
