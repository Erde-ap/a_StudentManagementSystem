class PasschangeController < ApplicationController

   protect_from_forgery except: :search
   def passchange
   json_request = JSON.parse(request.body.read)

   @student_id = json_request["student_id"]
   @password1 = json_request["password1"]
   @password2 = json_request["password2"]
   @status = ''
   
   if @password1 == @password2
      if 6 <= @password1.length && @password1.length <= 10
         user = User.find_by(student_id: @student_id)
         user.password = @password1
         user.save!
         @status = '変更完了しました'
      else
         @status = 'パスワードは6文字以上10文字以内です'
      end
   else
      @status = 'パスワードが間違っています'
   end
   
   render json: {'status' => @status}
   end
end