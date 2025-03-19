a = int(input())
b = int(input())
integer_division = a/b
float_division = a//b
print(float_division)
print(integer_division)


class Shape:
    def __init__(self):
        pass 
    
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, lenght, width):
        self.length = lenght
        self.width = width  
    
    def area(self):
        return self.length*self.width

lenght = int(input())
width = int(input())

obj = Rectangle(lenght, width)

print(obj.area())

class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, money):
        self.balance += money

    def withdraw(self, money):
        if self.balance < money:
            print("Permission denied")
            print("Your balance", f"{self.balance}")
        else:
            self.balance -= money
            print("Your balance", f"{self.balance}")

cash = Account("Mariya", 1000000)
cash.deposit(450000)
cash.withdraw(20000)


class Shape:
    def __init__(self):
        pass 
    
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, lenght, width):
        self.length = lenght
        self.width = width  
    
    def area(self):
        return self.length*self.width

lenght = int(input())
width = int(input())

obj = Rectangle(lenght, width)

print(obj.area())

class Shape:
    def __init__(self):
        pass 
    
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, lenght):
        self.length = lenght
    
    def area(self):
        return self.length**2

lenght = int(input())

obj = Square(lenght)

print(obj.area())


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def show(self):
        print(f"{self.x}", f"{self.y}")

    def move(self, x1, y1):
        self.x = x1
        self.y = y1

    def dist(self, point):
        distt = ((self.x-point.x)**2+(self.y-point.y)**2)**0.5
        return distt
    
    
pointtt = Point(5, 7)
pointtt.show()

pointt = Point(0, 0)
    
pointtt.move(3,2)
pointtt.show()
pointt.show()

print(pointtt.dist(pointt))

def filterr(n):
    if n<=1:
        return False
    
    for i in range(2, n):
        if n%i == 0:
            return False
    return True
    
listt = [1, 2, 3, 4, 5, 6, 7, 8, 9]

primme = list(filter(lambda z: filterr(z), listt))

print(primme)
        