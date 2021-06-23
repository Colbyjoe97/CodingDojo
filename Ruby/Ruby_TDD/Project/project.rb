class Project
    attr_accessor :name, :description, :owner, :tasks
    def initialize(name, desc, owner)
        @name = name
        @description = desc
        @owner = owner
        @tasks = []
    end

    def elevator_pitch
        p "#{@name}, #{@description}"
    end
    def tasks
        p @tasks
    end
    def addTask(task)
        @tasks.push(task)
    end
    def printTasks
        @tasks.each do |task|
            p task
        end
    end
end
@project1 = Project.new('Project 1', 'description 1', "John Snow")
@project1.elevator_pitch
@project1.addTask("Finish Assignment")
@project1.tasks
@project1.printTasks