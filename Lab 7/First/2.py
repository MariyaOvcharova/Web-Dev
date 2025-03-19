print(11==6)
print(0>=0,1)

a=6
b=7

if b<a:
    print(b , "smaller")
else:
    print(b, "bigger")

print(bool("blobs"))
print(bool(123))
print(bool(["yabloko", "vishnya", "banan"]))


print(bool(False))
print(bool(None))
print(bool(0))
print(bool(""))
print(bool(()))
print(bool([]))
print(bool({}))


def myclass():
    return 0

m=myclass()
print(m)

def myclass():
    return True

m=myclass()
print(m)

if myclass():
    print("DA")
else:
    print("No(")


x=200
print(isinstance(x, bool))

x=200
y=155

print(x+y)
print(x%y)
print(x/y) 
"""не округляет"""
print(x//y) 
"""округляет"""

c=6
b=7
if(c!=b and c<b):
    print("Yes")
else:
    print("No")


if x is y :
    print("Yes")
else:
    print("No")


print(x|y)

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)
    """лист со соловами с буквой а"""

print(newlist)

newlist1 = [x for x in fruits if "a" in x]

print(newlist1)

newlist2 = [x for x in fruits if x != "banana"]

print(newlist2)

newlist3 = [x for x in range(5)]

print(newlist3)

kaps = ["solnce", "lyna", "zvezda"]

kaps2 = [x.upper() for x in kaps]

print(kaps2)

kaps3 = ["skazka" for x in kaps2]

print(kaps3)

kaps4 = [x if x != "solnce" else "meteor" for x in kaps]

print(kaps4)