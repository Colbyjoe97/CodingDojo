from operator import itemgetter
## 1: Updating values
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x':15, 'y':20}]
students[0]['last_name'] = 'Bryant'
print(students)
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)


## 2: Iterate through a list of Dic/tionaries
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for i in range(0, len(students), 1):
        print("first_name -", students[i]['first_name'] + ",",  "last_name -", students[i]['last_name'])
print(iterateDictionary(students))


## 3: Get the values from a list of dictionaries
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDict(value):
    if value == 'first_name':
        print(students[0]['first_name'])
        print(students[1]['first_name'])
        print(students[2]['first_name'])
        print(students[3]['first_name'])
    elif value == 'last_name':
        print(students[0]['last_name'])
        print(students[1]['last_name'])
        print(students[2]['last_name'])
        print(students[3]['last_name'])
print(iterateDict('last_name'))


## 4: Iterate through a dictionary with list values
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank', 'test'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):
    print(len(dojo['locations']), 'LOCATIONS')
    print(dojo['locations'],'\n')
    print(len(dojo['instructors']), 'INSTRUCTORS')
    print(dojo['instructors'],'\n')
print(printInfo(dojo))