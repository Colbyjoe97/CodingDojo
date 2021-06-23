def sigma(num):
    if num == 1: # In this case, base case = 1
        # Base case- we know what to return and no calculations are needed
        return num
    else:
        # This is the recursion, starting at num
        return num + sigma(num - 1)  # Foreward progression = function calls itself and takes the function one step closer to the base case


# print(sigma(5))

def factorial(num):
    if num == 1:
        return num
    else:
        return num * factorial(num - 1)

# print(factorial(12))

def rFib(n): # Fibonacci
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return rFib(n-1) + rFib(n-2)

# print(rFib(10))

def rGCF(num1, num2): # Greatest Common Factor
    if num1 == num2:
        return num1
    elif num1 > num2:
        return rGCF(num1 - num2, num2)
    elif num2 > num1:
        return rGCF(num1, num2 - num1)


# print(rGCF(22, 8))


def ios(strInput, sub = "", i = 0): # In-Order Subsets
    if i == len(strInput):
        return [sub]
    else:
        return ios(strInput, sub + strInput[i], i+1) + ios(strInput, sub, i+1)

print(ios("abcd"))