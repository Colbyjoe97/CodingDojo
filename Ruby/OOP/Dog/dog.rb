require_relative 'mammal'
require_relative 'Lion'

class Dog < Mammal

    def pet
        @health += 5
        puts "#{name} was pet and gained 5 health!"
    end

    def walk
        @health -= 1
        puts "#{name} went on a walk and lost 1 health!"
    end

    def run
        @health -= 10
        puts "#{name} went running and lost 10 health!"
    end
end

buddy = Dog.new("Buddy")
lion = Lion.new("lion")
lion.display_health
buddy.walk
buddy.walk
buddy.walk
buddy.run
buddy.run
buddy.pet
buddy.display_health