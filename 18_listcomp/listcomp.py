#Pythagorean Triples
def pTripleL(n):
    l = [[b,a,i] for i in range(n) for a in range(i) for b in range(a) if (a * a + b * b == i * i) ]
    return l
print(pTripleL(20))

#Quicksort
def quickS(lis):
    return quickS([i for i in lis[1:] if i <= lis[0]]) + [lis[0]] + quickS([i for i in lis[1:] if i > lis[0]]) if len(lis) > 1 else lis
print(quickS([1,2,6,9,1,2,9,3,6,2,4]))
