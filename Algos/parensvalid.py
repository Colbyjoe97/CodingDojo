def parensvalid(stringInput):
    counter = 0
    for i in range(len(stringInput)):
        if counter < 0:
            print('Not Valid')
            return False
        if stringInput[i] == '(':
            counter += 1
        if stringInput[i] == ')':
            counter -= 1
    if counter == 0:
        print("Valid")
    else:
        print("Not valid")
parensvalid("()()())(")
