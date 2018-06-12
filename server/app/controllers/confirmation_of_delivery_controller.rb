class ConfirmationOfDeliveryController < ApplicationController

  #未読
  def delivery_not_read
    @student_id = params[:student_id]
     if @student_id == '9990000' or @student_id == '9900000'
      @date = Request.where(apply_state: false)
      render json: @date
     else
       render json: {'status' => 'error:権限がありません'}
     end
    @student_id = nil
    @date = nil
  end
  #既読
  def delivery_already_read
    @student_id = params[:student_id]
    if @student_id == '9990000' or @student_id == '9900000'
      @date = Request.where(apply_state: true)
      render json: @date
    else
      render json: {'status' => 'error:権限がありません'}
    end
    @student_id = nil
    @date = nil
  end
  #未読を既読に変更
  def change_apply_state
    @id = params[:id]
    @approval_state = params[:approval_state]
    @student_id = params[:student_id]
    #教師かどうか
    if @student_id == '9990000' or @student_id == '9900000'
      #idが存在しているか
      if @id ==nil
        render json: {'status' => 'error:データに不具合があります'}
      else
        Request.find_by(id: @id).update(apply_state: true, approval_state: @approval_state)
        @YOMEMI = Request.where(id: @id).pluck(:name)
        @MOEMI = Request.where(id: @id).pluck(:req_month)
        @AKARI = Request.where(id: @id).pluck(:req_day)
        eilene1 = Request.where(id: @id).pluck(:req_period1)
        eilene2 = Request.where(id: @id).pluck(:req_period2)
        eilene3 = Request.where(id: @id).pluck(:req_period3)
        eilene4 = Request.where(id: @id).pluck(:req_period4)
        eilene5 = Request.where(id: @id).pluck(:req_period5)

        Attendance.where(student_id: @YOMEMI.join).where(month: @MOEMI).where(day: @AKARI).update(period1:eilene1,period2:eilene2,period3:eilene3,period4:eilene4,period5:eilene5)
        render json: {'status' => 'データを更新しました'}
      end
  else
    render json: {'status' => 'error:権限がありません'}
    end
    @id = nil
    @approval_state = nil
    @student_id = nil
    @YOMEMI = nil
    @AKARI = nil
    @MOEMI = nil
  end
end
