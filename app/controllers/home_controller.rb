class HomeController < ApplicationController
  def index
  	# @news_category = Category.find(7)
  	@leave_message = LeaveMessage.new
  end
end