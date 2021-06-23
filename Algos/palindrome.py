def isPalindrome(stringInput):
    for i in range(0, len(stringInput), 1):
        if stringInput[i] == stringInput[len(stringInput) - 1 - i]:
            return True
        else:
            return False
print(isPalindrome("racecar")) #true
print(isPalindrome("hello")) #false
print(isPalindrome("oxo")) #true
print(isPalindrome("goodbye")) #false