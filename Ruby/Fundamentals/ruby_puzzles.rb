def greaterThanTen(arr)
    sum = 0
    for i in arr
        sum += i
    end
    puts "Sum is: #{sum}"
    puts arr.reject { |i| i < 10}.join(', ')
end
# greaterThanTen([3,5,1,2,7,9,8,13,25,32])

def names(arr)
    puts arr.shuffle.join(', ')
    puts arr.reject { |i| i.length < 5}.to_s
end
# names(["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"])

def alphabet(arr)
    first = arr.shuffle.first
    last = arr.shuffle.last
    puts "First: #{first}"
    puts "last: #{last}"
    newArr = []
    newArr.push(first)
    newArr.push(last)
    if newArr[0] == "A" || newArr[0] == "E" || newArr[0] == "I" || newArr[0] == "O" || newArr[0] == "U"
        puts "First letter is a vowel!"
    end
    puts newArr.to_s
end
# alphabet(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"])

def randomArr
    for i in 1..10
        puts rand(55..100).to_s
    end
end
# randomArr

def randomSortedArr
    arr = []
    for i in 1..10
        arr.push(rand(55..100))
    end
    puts arr.sort.join(' - ')
    puts "Minimum: #{arr.min}"
    puts "Maximum: #{arr.max}"
end
# randomSortedArr

def randomString
    string = ""
    for i in 1..5
        string += (65+rand(26)).chr.to_s
    end
    puts string
end
# randomString

def randomStringSets
    arr = []
    str = ""
    for i in 1..10
        for j in 1..5
            str += (65+rand(26)).chr.to_s
        end
        arr.push(str)
        str = ""
    end
    puts arr.join(" - ")
end
randomStringSets