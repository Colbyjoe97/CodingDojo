Rails.application.routes.draw do
  get '' => 'games#index'
  get 'farm' => 'games#farm'
  get 'cave' => 'games#cave'
  get 'house' => 'games#house'
  get 'casino' => 'games#casino'
end
