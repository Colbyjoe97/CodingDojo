require_relative "human"

class Ninja < Human
    def initialize(name)
        super
        @name = name
        @stealth = 175
    end

    def steal(target)
        @health += 10
        puts "#{name} stole from #{target.name} and gained 10 health!"
    end

    def get_away
        @health -= 15
        puts "#{name} got away at the cost of losing 15 health!"
    end
end
