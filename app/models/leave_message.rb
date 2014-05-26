class LeaveMessage < ActiveRecord::Base
  attr_accessible :name, :comment, :email
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :name,    :presence => true
  validates :comment, :presence => true
  validates :email,   :presence   => true,
                      :format     => { :with => email_regex },
                      :uniqueness => { :case_sensitive => false }
end
