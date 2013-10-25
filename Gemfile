source 'http://ruby.taobao.org'

gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  gem "therubyracer"
  gem "less-rails" #Sprockets (what Rails 3.1 uses for its asset pipeline) supports LESS
  gem "twitter-bootstrap-rails" #界面
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'therubyracer', :platforms => :ruby
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem "ransack" 
gem 'bootstrap-datepicker-rails'
gem 'acts-as-taggable-on' # tag
gem 'rails_kindeditor', '~> 0.4.0' # rich text
gem 'devise' #用户注册
gem 'cancan' #权限管理
gem 'simple_form' #更好的form help
gem "nested_form"  #嵌套资源form
gem 'state_machine' #状态转换跟踪
gem "less-rails" 
gem "haml-rails" #erb简化模板
gem 'requirejs-rails' #requirejs

gem 'rack-cache', :require => 'rack/cache'
gem 'dragonfly', '~>0.9.15'

gem 'kaminari', '~> 0.14.1' #翻页
gem 'default_value_for', '~> 2.0.1' #model中更好的默认值设定
gem 'qiniu-rs'
gem 'carrierwave'
gem 'carrierwave-qiniu'

gem 'jcrop-rails'
gem "mini_magick"
gem 'rvm-capistrano'
gem 'capistrano'


group :development, :test do
  gem 'pry'
  gem 'pry-nav'
  gem 'sqlite3'
end

group :production do
  gem 'pg'
end
# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
