class TimesController < ApplicationController
  def main
    @time = Time.now
    render 'main'
  end
end
