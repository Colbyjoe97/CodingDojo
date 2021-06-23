class Mammal
    attr_accessor :health, :name
    def initialize(name)
        @name = name
        @health = 150
    end

    def display_health
        puts "#{name} Health: #{health}"
    end
end

squirrel = Mammal.new("Squirrel")
puts squirrel.name