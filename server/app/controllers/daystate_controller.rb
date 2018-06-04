class DaystateController < ApplicationController
   def daystate
   @student_id = params[:student_id]
   @date = params[:date]   
   @period1 = params[:period1]
   @period2 = params[:period2]
   @period3 = params[:period3]
   @period4 = params[:period4]
   @period5 = params[:period5]
   @status = ''
   
   if @student_id == '9990000' or @student_id == '9900000'
      schedules = Schedule.find_by(yyyy_mm_dd: @date)
      schedules.period1 = @period1
      schedules.period2 = @period2
      schedules.period3 = @period3
      schedules.period4 = @period4
      schedules.period5 = @period5
      schedules.save!
      @status = '変更しました'
   else
      @status = 'error:権限がありません'
   end
   
   render json: {'status' => @status}
   end
end
