class PasschangeController < ApplicationController

   protect_from_forgery except: :search
   def password_changer

   @student_id = params[:student_id]#json_request["student_id"]
   @password1 = params[:first_password]#json_request["password1"]
   @password2 = params[:second_password]#json_request["password2"]
   
   if @password1 == @password2
      if 6 <= @password1.length && @password1.length <= 10
         user = User.find_by(student_id: @student_id)
         user.password = @password1
         user.save!
         @status = '変更完了しました'
         user.first_login = true
         user.save!
      else
         @status = 'パスワードは6文字以上10文字以内です'
      end
   else
      @status = 'パスワードが間違っています'
   end
   
   render json: {'status' => @status}
   end
end