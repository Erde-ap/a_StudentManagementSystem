class AddDeliveryToDatabaseController < ApplicationController
  protect_from_forgery except: :search # searchアクションを除外
  def create
    delivery = JSON.parse(request.body.read)
    if !delivery.brank?
    @student_id =   delivery['student_id']#params[:student_id]
    @req_year =     delivery['req_year']#params[:req_year]
    @req_month =    delivery['req_month']#params[:req_month]
    @req_day =      delivery['req_day']#params[:req_day]
    @req_type =     delivery['req_type']#params[:req_type]
    @reason =       delivery['reason']##params[:reason]
    @req_date = @req_year.to_s + ',' +  @req_month.to_s + ',' + @req_day.to_s
    @req_period1 =  delivery['req_period1']#params[:period1]
    @req_period2 =  delivery['req_period2']#params[:period2]
    @req_period3 =  delivery['req_period3']#params[:period3]
    @req_period4 =  delivery['req_period4']#params[:period4]
    @req_period5 =  delivery['req_period5']#params[:period5]
    stid = User.where(student_id: @student_id).pluck(:name)

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
                           approval_state: false
    )
    @newdate.save
     render json: @newdate#{'status'=> '申請完了！'}
    else
      render json: {'status' => 500}
    end
  end
end
