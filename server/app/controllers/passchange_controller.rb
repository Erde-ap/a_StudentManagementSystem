class PasschangeController < ApplicationController
   def passchange
   @student_id = params[:student_id]
   @new_password = params[:new_password]
   @status = ''
   
   if 6 <= @new_password.length && @new_password.length <= 10
      user = User.find_by(student_id: @student_id)
      user.password = @new_password
      user.save!
      @status = '変更完了しました'
   else
      @status = 'パスワードは6文字以上10文字以内です'
   end
   render json: {'status' => @status}
   end
end
