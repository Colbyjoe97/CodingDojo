class Lion < Mammal
    attr_accessor :health, :name
    def initialize(name)
        @name = name
        @health = 170
    end

    def fly
        @health -= 10
        puts "#{name} flew decreasing its health by 10!"
    end

    def attack_town
        @health -= 50
        puts "#{name} attacked the town and lost 50 health!"
    end

    def eat_humans
        @health += 20
        puts "#{name} ate some humans and gained 20 health!"
    end
end

simba = Lion.new("Simba")
simba.attack_town
simba.attack_town
simba.attack_town
simba.eat_humans
simba.eat_humans
simba.fly
simba.fly
simba.display_health