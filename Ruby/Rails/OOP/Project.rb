class Project
    attr_accessor :name, :description
    def initialize(name, desc)
        @name = name
        @description = desc
    end

    def elevator_pitch
        puts "#{name}, #{description}"
    end
end
project1 = Project.new("First Project", "First Project's Description")
project1.elevator_pitch