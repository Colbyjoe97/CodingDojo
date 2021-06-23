hash = {:first_name => "Coding", :last_name => "Dojo"}
newHash = {}

hash.delete(:first_name)
if hash.has_key?(:first_name)
    puts "Hash has key first_name!"
end
if hash.has_key?(:last_name)
    puts "Hash has key last_name!"
end

if hash.has_value?("Coding")
    puts "Coding found in hash!"
end
if hash.has_value?("Dojo")
    puts "Dojo found in hash!"
end
if newHash.empty?
    puts "newHash is empty!"
end
puts newHash
puts hash