def iterate(arr)
    for i in arr
        puts i
    end
end
# iterate([1,3,5,7,9,13])

def max
    arr = [1,3,52,7,9,13]
    puts arr.max
end
# max

def average(arr)
    sum = 0
    for i in arr
        sum += i
    end
    average = sum / arr.length
    puts "Sum: #{sum}"
    puts "Average: #{average}"
end
# average([2,10,3])

def odd
    arr = []
    for i in 1..255
        arr.push(i) if i % 2 != 0
    end
    puts arr
end
# odd

def greaterThan(y)
    arr = [1,2,3,4,5]
    count = 0
    for i in arr
        count += 1 if i > y
    end
    puts count
end
# greaterThan(3)

def square(arr)
    j = 0
    for i in arr
        arr[j] = i * i
        j += 1
    end
    puts arr
end
# square([1,2,3,4,5])

def eliminateNegatives(arr)
    j = 0
    for i in arr
        arr[j] = 0 if i < 0
        j += 1
    end
    puts arr
end
eliminateNegatives([-1,2,-3,4,-5,6])

def maxMinAvg(arr)
    max = arr[0]
    min = arr[0]
    sum = 0
    avg = 0
    for i in arr
        max = i if max < i
        min = i if min > i
        sum += i
    end
    avg = sum / arr.length
    puts "Max is: #{max}"
    puts "Min is: #{min}"
    puts "Sum is: #{sum}"
    puts "Average is: #{avg}"
end
# maxMinAvg([1,2,3,4,5,6,7,8,9,10])

def shift(arr)
    j = 0
    for i in arr
        arr[j] = arr[j + 1]
        j += 1
    end
    arr[arr.length - 1] = 0
    puts arr
end
# shift([1,2,3,4,5])

def toString(arr)
    j = 0
    for i in arr
        arr[j] = "Dojo" if i < 0
        j += 1
    end
    puts arr
end
# toString([-1,2,-3,4,-5,6])