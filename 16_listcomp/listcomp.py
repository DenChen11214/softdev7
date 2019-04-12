def passThresh(pas):
    UC = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
    LC = UC.lower()
    nums = "1234567890"
    thresh = [0 if x in UC else 1 if x in LC else 2 if x in nums else 3 for x in pas]
    #print(thresh)
    if(0 in thresh and 1 in thresh and 2 in thresh):
        return True;
    return False
passThresh("heLLOw0rlD")

def passStrength(pas):
    UC = "ABCDEFHIJKLMNOPQRSTUVWXYZ"
    LC = UC.lower()
    nums = "1234567890"
    chars = ".?!&#,;:-_*"
    thresh = [0 if x in UC else 1 if x in LC else 2 if x in nums else 3 if x in chars else 4 for x in pas]
    strength = 0
    if(0 in thresh):
        strength += 2
    if(1 in thresh):
        strength += 2
    if(2 in thresh):
        strength += 2
    if(3 in thresh):
        strength += 2
    if(len(thresh) >= 10):
        strength += 2
    return strength
print(passStrength("heLLOw0rlD;,.123as2ushfbq26wyhn453wegsbf"))
