class Human
    attr_accessor :strength, :intelligence, :stealth, :health, :name
    def initialize(name)
        @name = name
        @strength = 3
        @intelligence = 3
        @stealth = 3
        @health = 100
    end

    def attack(target)
        if target.class.ancestors.include?(Human)
            target.health -= 5
            puts "#{target.name} was attacked and lost 5 health, #{target.health} remaining!"
            true
        else
            puts "Target not attackable!"
            false
        end
    end
end