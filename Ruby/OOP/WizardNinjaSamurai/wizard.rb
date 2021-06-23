require_relative 'human'
require_relative 'ninja'
require_relative 'samurai'

class Wizard < Human
    def initialize(name)
        super
        @name = name
        @health = 50
        @intelligence = 25
    end

    def heal
        @health += 10
        puts "#{name} healed himself for 10 health! #{health} remaining health"
    end

    def fireball(target)
        target.health -= 20
        puts "#{target.name} was attacked by #{name} for 20 damage!"
    end
end

gandolf = Wizard.new("Gandolf")
sakurai = Ninja.new("Sakurai")
jin = Samurai.new("Jin")
sakai = Samurai.new("Sakai")
jack = Human.new("Jack")
# gandolf.fireball(sakurai)
# sakurai.steal(jack)
# sakurai.get_away
jin.death_blow(jack)
sakai.meditate
jin.how_many