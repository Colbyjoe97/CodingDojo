FactoryBot.define do
  factory :reply do
    content { "MyText" }
    user { nil }
    message { nil }
  end
end
