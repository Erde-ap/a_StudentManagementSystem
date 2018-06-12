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
        if params[:approval_state] != false
          # ここから新しい状態にAttendansesを変更する
          Request.find_by(id: @id).update(apply_state: true, approval_state: @approval_state)
          @YOMEMI = Request.where(id: @id).pluck(:student_id)
          @MOEMI = Request.where(id: @id).pluck(:req_month)
          @AKARI = Request.where(id: @id).pluck(:req_day)
          eilene1 = Request.where(id: @id).pluck(:req_period1)
          eilene2 = Request.where(id: @id).pluck(:req_period2)
          eilene3 = Request.where(id: @id).pluck(:req_period3)
          eilene4 = Request.where(id: @id).pluck(:req_period4)
          eilene5 = Request.where(id: @id).pluck(:req_period5)
          @beilene = Attendance.where(student_id: @YOMEMI).where(month: @MOEMI).where(day: @AKARI)
          # 前回の状態をベイレーンに保存（常識的に考えた結果欠席と遅刻を変えてもらうことが殆どだという結論から２と１の判断、優先順位としては２：欠席＞１：遅刻＞０：出席）
          # もしかしたら出席から欠席にしてもらいたがる変態がいるかもしれないので出席も入れている。こうけつ、病欠、就活は基本変更がない
          if @beilene.pluck(:period1) == '2' or @beilene.pluck(:period2) == '2' or @beilene.pluck(:period3) == '2' or @beilene.pluck(:period4) == '2' or @beilene.pluck(:period5) == '2'
            beilene = 2
          elsif @beilene.pluck(:period1) == '1' or @beilene.pluck(:period2) == '1' or @beilene.pluck(:period3) == '1' or @beilene.pluck(:period4) == '1' or @beilene.pluck(:period5) == '1'
            beilene = 1
          else
           beilene = 0
          end


          beno = Date.today
          Attendance.where(student_id: @YOMEMI).where(month: @MOEMI).where(day: @AKARI).update(period1:eilene1.join,period2:eilene2.join,period3:eilene3.join,period4:eilene4.join,period5:eilene5.join)
          Request.where(id: @id).update(apply_state: true, before_state: beilene.to_int, apply_date: beno)
         render json: {'status' => 'データを更新しました'}
        else
          render json: @approval_state
        end


      end
  else
    render json: {'status' => 'error:権限がありません'}
    end
    @id = nil
    @student_id = nil
    @YOMEMI = nil
    @AKARI = nil
    @MOEMI = nil
  end
end
