require_relative 'human'

class Samurai < Human
    @@samurai_count = 0
    def initialize(name)
        super
        @name = name
        @health = 200
        @@samurai_count += 1
    end

    def death_blow(target)
        target.health = 0
        puts "#{name} killed #{target.name} in one strike!"
    end

    def meditate
        @health = 200
        puts "#{name} meditated back to full health!"
    end

    def how_many
        puts "There are #{@@samurai_count} samurai!"
    end
end