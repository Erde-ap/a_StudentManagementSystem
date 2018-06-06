class DaystateController < ApplicationController
   def daystate
   @student_id = params[:student_id]
   @year = params[:year]
   @month = params[:month]
   @day = params[:day]
   @period1 = params[:period1]
   @period2 = params[:period2]
   @period3 = params[:period3]
   @period4 = params[:period4]
   @period5 = params[:period5]
   @status = ''
   number = 1
   
   if @month.index('0') == 0
      @month = @month.slice(1)
   end
   if @day.index('0') == 0
      @day = @day.slice(1)
   end

   if @student_id == '9990000' or @student_id == '9900000'
      schedules = Schedule.find_by(yyyy_mm_dd: @year + ',' + @month + ',' + @day)
      schedules.period1 = @period1
      schedules.period2 = @period2
      schedules.period3 = @period3
      schedules.period4 = @period4
      schedules.period5 = @period5
      schedules.save!
      while number < User.count + 1
      users = User.find_by(id: number)
      if users.permission == 0
         attendances = Attendance.find_by(student_id: users.student_id, year: @year, month: @month, day: @day)
         if @period1.to_i == 0
            attendances.period1 = 9
         end
         if @period2.to_i == 0
            attendances.period2 = 9
         end
         if @period3.to_i == 0
            attendances.period3 = 9
         end
         if @period4.to_i == 0
            attendances.period4 = 9
         end
         if @period5.to_i == 0
            attendances.period5 = 9
         end
         attendances.save!
      end
      number += 1
      end
      @status = '変更しました'
      
   else
   
      @status = 'error:権限がありません'
   end
 
   render json: {'status' => @status}
   end
end
