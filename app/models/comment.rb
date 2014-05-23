class Comment < ActiveRecord::Base
  attr_accessible :name, :email, :content
  belongs_to :article
end
