class ConfirmationOfDeliveryController < ApplicationController
  def delivery_not_read
    @student_id = params[:student_id]
     if @student_id == '9990000' or @student_id == '9900000'
      @date = Request.where(apply_state: false)
      render json: @date
     else
       render json: {'error' => '権限がありません'}
     end
  end

  def delivery_already_read
    @student_id = params[:student_id]
    if @student_id == '9990000' or @student_id == '9900000'
      @date = Request.where(apply_state: true)
      render json: @date
    else
      render json: {'error' => '権限がありません'}
    end
  end
end
