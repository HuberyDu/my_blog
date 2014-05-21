class LeaveMessagesController < ApplicationController
  def create
    @leave_message = LeaveMessage.new(params[:leave_message])
    if @leave_message.save
      redirect_to root_path, notice: t("leave_message_success", scope: "notice")
    else
      redirect_to root_path, notice: t("leave_message_failed", scope: "alert")
    end
  end
end
