a = (-1..15)

puts "Class Name: #{a.class}"
puts "Range includes a 14!" if a.include? 14
puts "The last number in the range is: " + a.last.to_s
puts "The maximum number in the range is: " + a.max.to_s
puts "The minimum number in the range is: " + a.min.to_s