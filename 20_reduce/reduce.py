from functools import reduce
punc = ',.!;?-'

def sinWordF(word):
    f = open("warAndPeace.txt")
    words = f.read()
    words = [x.strip(punc).split() for x in words.split("\n")]
    words = reduce((lambda x,y: x + y), words).count(word)
    print(words)
print(sinWordF("the"))
##def longestwords(filename):
##    f = open(filename,'r')
##    words = f.read().split()
##    words = map(lambda s: s.strip(punc),words)
##    maxlengths = max(map(len,words))
##    longestwords = filter(lambda s: len(s) == maxlengths,words)
##    f.close()
##    return longestwords
##def main():
##    filename = 'Tom_Sawyer_Preface.txt'
##    w = longestwords(filename)
##    for words in w:
##        print words
##main()
##1
##def longestreduce(filename):
##    f = open(filename,'r')
##    words = f.read().split()
##    words = map(lambda s: s.strip(punc),words)
##    f.close()
##    return reduce(lambda x,y: x if len(x) >= len(y) else y,words)
##def main():
##    filename = 'Tom_Sawyer_Preface.txt'
##    print longestreduce(filename)

##def averagelength():
##    filename = raw_input('Enter a file name:')
##    f = open(filename,'r')
##    words = f.read().split()
##    words = map(lambda s: s.strip(punc),words)
##    f.close()
##    lengths = map(len,words)
##    total = sum(lengths) * 1.0
##    print total/len(lengths)
##averagelength()
##
##def getword():
##    '''prompts user for a word, then return the word in lowercase
##    with all leading and trailing whitespace characters
##    and punctuation marks removed'''
##    wordwanted = raw_input('Enter a word: ')
##    wordwant = ((wordwanted.lower()).strip( )).strip(punc)
##    return wordwant
##def wordinfile(filename):
##    f = open(filename,'r')
##    words = f.read().split()
##    words = map(lambda s: s.strip('!.?,-'),words)
##    wordwanted = getword()
##    print len(filter(lambda x: x == wordwanted,words))
##wordinfile('Tom_Sawyer_Preface.txt')
