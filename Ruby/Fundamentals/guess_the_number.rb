def guess_number guess
    number = 25
    # your code here
    puts "Your guess was too high!" unless guess < number + 1
    puts "Your guess was too low!" unless guess > number - 1
    puts "You got it!" unless guess != number
end

guess_number 25