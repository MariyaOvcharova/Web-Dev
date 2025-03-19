def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False
  
def sleep_in(weekday, vacation):
   return not weekday or vacation

def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

def sum_double(a, b):
    sum_value = a + b
    return sum_value * 2 if a == b else sum_value

def diff21(n):
    diff = abs(n - 21)
    return diff * 2 if n > 21 else diff

def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

def makes10(a, b):
    return a == 10 or b == 10 or (a + b) == 10
