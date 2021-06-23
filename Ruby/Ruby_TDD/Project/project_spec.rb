require_relative 'project'
RSpec.describe Project do
    before(:each) do
        @project1 = Project.new('Project 1', 'description 1', "John Snow")
        @project2 = Project.new('Project 2', 'description 2', "Peter Griffon")
    end
    it 'has a getter and setter for name attribute' do
        @project1.name = "Changed Name"
        expect(@project1.name).to eq("Changed Name")
    end
    it 'has a method elevator_pitch to explain name and description' do
        expect(@project1.elevator_pitch).to eq("Project 1, description 1")
        expect(@project2.elevator_pitch).to eq("Project 2, description 2")
    end
    it 'has an owner attribute' do
        @project1.owner = "Changed owner"
        expect(@project1.owner).to eq("Changed owner")
    end
    it 'has a method to call all tasks' do
        expect(@project1.tasks).to eq([])
        expect(@project2.tasks).to eq([])
    end
    it 'has a method addTask to add a task to the project' do
        expect(@project1.addTask("Adding new task")).to eq(["Adding new task"])
        expect(@project2.addTask("Adding new task")).to eq(["Adding new task"])
    end
    it 'has a method printTasks to print all tasks' do
        expect(@project1.printTasks).to eq([])
        expect(@project2.printTasks).to eq([])
    end
end