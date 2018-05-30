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
        Request.find_by(id: @id).update(apply_state: true, approval_state: @app_state)
        render json: {'status' => 'データを更新しました'}
      end
  else
    render json: {'status' => 'error:権限がありません'}
    end
    @id = nil
    @approval_state = nil
    @student_id = nil
  end
end
