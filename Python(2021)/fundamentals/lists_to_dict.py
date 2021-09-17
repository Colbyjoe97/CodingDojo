def make_dict(list1, list2):
    new_dict = {}
    for i in range(0, len(list1)):
        new_dict[list1[i]] = list2[i]
    return(new_dict)

print(make_dict(['anna', 'jeff', 'jon'], ['horse', 'cat', 'dog']))