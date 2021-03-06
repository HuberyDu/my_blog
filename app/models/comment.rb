class Comment < ActiveRecord::Base
  attr_accessible :name, :email, :content
  belongs_to :article
  
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i


  validates :name,    presence: true
  validates :email,   presence: true,
                      :format     => { :with => email_regex },
                      :uniqueness => { :case_sensitive => false }
  validates :content, presence: true
end
