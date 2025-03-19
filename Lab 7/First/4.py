turtle =('solnce', 'luchik')
print(turtle)

turtle =('solnce', 'solnce', 'luchik')
print(turtle)
print(len(turtle))

thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))

tuple1 = ("abc", 34, True, 40, "male")
print(tuple1)

mytuple = ("apple", "banana", "cherry")
print(type(mytuple))

print(turtle[0])

x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)

y = list(x)
y.append("banana")
x = tuple(y)
print(x)

z = ("wildberry",)
x += z
print(x)

y = list(x)
y.remove("apple")
x = tuple(y)
print(x)

#del x удаляет 

(a, b, c, *d) = x
print (a)
print(d)


tuple = ("apple", "banana", "cherry")
for i in range(len(tuple)):
  print(tuple[i])

i=0

while i<len(tuple):
  print(tuple[i])
  i += 1


fruits = ("apple", "banana", "cherry")
mytuple = fruits * 2

print(mytuple)

f = mytuple.count("apple")
print(f)

g = mytuple.index("banana")
print(g+1)


fruits = ["apple", "banana", "cherry", "lemon"]
for x in fruits:
  print(x)
for x in "apple":
  print(x)

for x in fruits:
   print(x)
   if x == "cherry":
    break

for x in fruits:
   if x == "cherry":
    continue
print(x)


for x in range(5):
  print(x+1)
else:
  print("thats all")


adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)


for x in [2, 45, 8]:
  pass
