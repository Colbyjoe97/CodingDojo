## Replace positive numbers in an array with "big"
# def biggieSize(list):
#     for i in range(0, len(list), 1):
#         if list[i] > 0:
#             list[i] = "big"
#     return list
# print(biggieSize([-1,2,3,-5]))


## Replace last value with the number of positives in an array
# def countPositives(list):
#     count = 0
#     for i in range(0, len(list), 1):
#         if list[i] > 0:
#             count += 1
#         list[len(list) - 1] = count
#     return list
# print(countPositives([-1,3,5,1]))


## Returns sum of all values in a list
# def sumTotal(list):
#     sum = 0
#     for i in range(0, len(list), 1):
#         sum += list[i]
#     return sum
# print(sumTotal([1,2,3,4]))

## Returns the average of a list
# def average(list):
#     sum = 0
#     for i in range(0, len(list), 1):
#         sum += list[i]
#     avg = sum / len(list)
#     return avg
# print(average([1,2,3,4]))


## Returns the length of a list
# def length(list):
#     return len(list)
# print(length([1,2,3,4,5]))


## Returns the minimum number in a list
# def minimum(list):
#     min = list[0]
#     for i in range(1, len(list), 1):
#         if min > list[i]:
#             min = list[i]
#     return min
# print(minimum([1,-10,1000,-50]))


## Returns the maximum number in a list
# def maximum(list):
#     max = list[0]
#     for i in range(1, len(list), 1):
#         if max < list[i]:
#             max = list[i]
#     return max
# print(maximum([1,85,1000,500]))


## Return a dictionary of information
# def ultimateAnalysis(list):
#     dict = {
#         "min": list[0],
#         "max": list[0],
#         "sumTotal": list[0],
#         "avg": 0
#     }
#     for i in range(1, len(list), 1):
#         if dict["min"] > list[i]:
#             dict["min"] = list[i]
#         if dict["max"] < list[i]:
#             dict["max"] = list[i]
#         dict["sumTotal"] += list[i]
#     dict["avg"] = dict["sumTotal"] / len(list)
#     return dict
# print(ultimateAnalysis([1,2,3,4]))

## Reverses an array without creating a new one
# def reversal(list):
#     for i in range(0, round(len(list) / 2), 1):
#         temp = list[i]
#         list[i] = list[len(list) - 1 - i]
#         list[len(list) - 1 - i] = temp
#     return list
# print(reversal([1,2,3,4]))