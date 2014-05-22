class UserMailer < ActionMailer::Base
  default from: "cuidashax3510@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.leave_message.subject
  #
  def leave_message(leave_message)
    @message = leave_message.comment
    mail :to => "duxiaolong92@gmail.com", :subject => "leave_message"
  end
end
