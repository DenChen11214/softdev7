#Team Rats: Bill Ni and Dennis Chen
#SoftDev pd7
#K #11: PPFTLCW
#4/14/19

#1

l = []
for i in range(5):
	l.append(str(i * 2) * 2)

print(l)

l = [str(i * 2) * 2 for i in range(5)]
print(l)

# 2

l = []
for i in range(5):
	l.append(7 + i * 10)

print(l)

l = [7 + i * 10 for i in range(5)]
print(l)

# 3

l = []
for i in range(3):
	l.append(0)
	l.append(i)
	l.append(i * 2)
print(l)

l = [0 if i % 3 == 0 else i // 3 if i % 3 == 1 else i // 3 * 2 if i % 3 == 2 else 0 for i in range(9)]
print(l)

# 6

def dvi(n):
	l = []
	for i in range(n):
		if n % (i + 1) == 0:
			l.append(i + 1)
	return l
print(dvi(10))

def div(n):
	l = [(i + 1) for i in range(n) if (n % (i + 1) == 0)]
	return l
print(div(10))

# 4
l = []
for i in range(101):
    if(len(dvi(i)) > 2):
        l.append(i)
print(l)
l = [i for i in range(101) if len(dvi(i)) > 2]
print(l)

# 5

l = []
for i in range(101):
    if(len(dvi(i)) == 2):
        l.append(i)
print(l)
l = [i for i in range(101) if len(dvi(i)) == 2]
print(l)

# 7

def swap(mtx):
	newmtx = []
	lh = len(mtx[0])
	lv = len(mtx)

	for i in range(lh):
		newmtx.append([])
		for j in range(lv):
			newmtx[i].append(None)

	for i in range(len(mtx[0])):
		for j in range(len(mtx)):
			newmtx[i][j] = mtx[j][i]
	return newmtx
print(swap([[1, 2, 3], [3, 2 ,1], [1, 2, 3]]))


def sawp(mtx):
	return [[mtx[i][j] for i in range(len(mtx))] for j in range(len(mtx[0]))]
print(sawp([[1, 2, 3], [3, 2 ,1], [1, 2, 3]]))
