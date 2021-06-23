a = ["colby", "matt", "jon", "kevin", "sam"]
b = [1, 2, 3, 4, 5]
c = ["matt", 3]
x = (a + b) - c
# combines arrays A and B
# then removes matt from array a and 3 from array b (because it's subtracting c)
puts "Array length: #{a.length}"
puts x.shuffle.join(', ')
# shuffles the value of x and joines everything with a comma and space