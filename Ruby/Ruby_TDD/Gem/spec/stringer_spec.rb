require "spec_helper"


RSpec.describe Stringer do
  it "has a version number" do
    expect(Stringer::VERSION).not_to be nil
  end

  it "concatenates undefined number of strings with a space" do 
    expect(Stringer.spacify "Oscar", "Vazquez", "Zweig", "Olasaba", "Hernandez", "Ricardo", "Mendoza").to eq("Oscar Vazquez Zweig Olasaba Hernandez Ricardo Mendoza")
  end

  it "shortens a given string to the specified number of characters" do expect(Stringer.minify("Hello", 10)).to eq("Hello")
  end

  it "replaces a word in a given string with the given word" do expect(Stringer.replacify("I can't do this", "can't", "can")).to eq("I can do this")
  end

  it "iterates over a string and adds each word to an array" do expect(Stringer.tokenize("I love to code")).to eq(["I", "love", "to", "code"])
  end

  it "removes a specified word from a given string" do expect(Stringer.removify("I'm not a developer", "not")).to eq("I'm a developer")
  end
end
