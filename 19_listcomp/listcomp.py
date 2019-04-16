#Team Run It Down: Dennis Chen and Vincent Chi
#SoftDev pd7
#K #19
#4/16/19

#a = {1,2,3}
#b = {2,3,4}
#a = {8,2,1,55,12,3}
#b = {1,2,42,61,74,123,12}
#a = {"a","b","c","e","g","z"}
#b = {"c","d","f","x","z"}
a = {"a","b","c","e","g","z"}
b = {1,2,42,61,74,123,12}
def union(a,b):
    #adds a list of a and a list of all the elements in b that are not in a together
    l=[i for i in a] + [x for x in b if x not in a]
    return l
print(union(a,b))

def intersection(a,b):
    #loops through a and for each element there, loops through b and picks out the ones that are equal
    l=[i for i in a for x in b if(x == i)]
    return l
print(intersection(a,b))

#u = {1,2,3}
#a = {2,3,4}
#u = {1,2,3,4,5,6,7,8}
#a = {1,2,3,6,8,9}
#u = {"a","b","c","e","g","z"}
#a = {"a","e","d","x","z"}
u = {"a","b","c","e","g","z"}
a = {1,2,3,6,8,9}
def setDif(u,a):
    #goes through each element in u and checks if it's in a, if not it's added to the list
    l=[x for x in u if x not in a]
    return l
print(setDif(u,a))

#a = {1,2,3}
#b = {2,3,4}
#a = {21,31,4,12,5,72,3}
#b = {2,3,4,12,72,42,9,20,90}
# a = {"a","b","c","e","g","z"}
# b = {"a","e","x","y","z"}
a = {"a","b","c","e","g","z"}
b = {2,3,4,12,72,42,9,20,90}
def symDif(a,b):
    #finds the set difference both ways and adds them together to create a symmetric difference
    l = [x for x in a if x not in b] + [x for x in b if x not in a]
    return l
print(symDif(a,b))

#a = {1,2}
#b = {"red","white"}
#a = {"happy","sad","bad","angry","annoyed"}
#b = {"person","animal","thing","human"}
a = {1,5,6,8,232,41}
b = {"monkeys",2.123,"what","apes"}
def cartProd(a,b):
    #loops through a and b and gets all possible combinations
    l = [(x,y) for x in a for y in b]
    return l
print(cartProd(a,b))
