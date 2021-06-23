class MathDojo
    attr_accessor :result
    def initialize
        @total = 0
    end

    def add(*numToAdd)
        @total += numToAdd.flatten.reduce(:+)
        self
    end

    def subtract(*numToSubtract)
        @total -= numToSubtract.flatten.reduce(:+)
        self
    end

    def result
        p @total
    end
end

puts challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result
puts challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result