class AppleTree
    attr_accessor :age
    attr_reader :height, :apple_count
    def initialize
        @age = 0
        @height = 10
        @apple_count = 00
    end

    def year_gone_by
        @age += 1
        @height += @height * 0.1
        if @age > 3 && @age < 10
            @apple_count += 2
        end
        return "Tree is #{@age} years old, #{@height} feet tall and has #{apple_count} apples"
    end

    def pick_apples
        @apple_count = 0
    end

    def test
        puts "this is a test for github"
    end
end