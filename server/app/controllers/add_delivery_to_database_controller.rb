class AddDeliveryToDatabaseController < ApplicationController
   protect_from_forgery except: :search # searchアクションを除外
  def create
    @student_id =  params[:student_id]#params[:student_id]
    @req_year =    params[:req_year]
    @req_month =   params[:req_month]
    @req_day =     params[:req_day]
    @req_type =    params[:req_type]
    @reason =      params[:reason]
    @req_date = @req_year.to_s + ',' +  @req_month.to_s + ',' + @req_day.to_s
    @req_period1 = params[:period1]
    @req_period2 = params[:period2]
    @req_period3 = params[:period3]
    @req_period4 = params[:period4]
    @req_period5 = params[:period5]
    @per_start = params[:periodStart]
    @per_end = params[:periodEnd]
    stid = User.where(student_id: @student_id).pluck(:name)
    if @per_start == '1'
      @state = Attendance.where(year: @req_year).where(month: @req_month).where(day: @req_day).pluck(:period1)
    elsif @per_start == '2'
      @state = Attendance.where(year: @req_year).where(month: @req_month).where(day: @req_day).pluck(:period2)
    elsif @per_start == '3'
      @state = Attendance.where(year: @req_year).where(month: @req_month).where(day: @req_day).pluck(:period3)
    elsif @per_start == '4'
      @state = Attendance.where(year: @req_year).where(month: @req_month).where(day: @req_day).pluck(:period4)
    else
      @state = Attendance.where(year: @req_year).where(month: @req_month).where(day: @req_day).pluck(:period5)
    end

    @newdate = Request.new(student_id: @student_id,
                           student_name: stid.join,
                           req_year:@req_year,
                           req_month:@req_month,
                           req_day:@req_day,
                           req_type:@req_type,
                           reason:@reason,
                           req_date: @req_date,
                           apply_state: false,
                           req_period1:@req_period1,
                           req_period2:@req_period2,
                           req_period3:@req_period3,
                           req_period4:@req_period4,
                           req_period5:@req_period5,
                           apply_date: nil,
                           approval_state: false,
                           period_start: @per_start,
                           period_end: @per_end,
                           before_state: @state
    )
    @newdate.save!
      render json: @newdate#{'status'=> '申請完了！'}
  end
end
