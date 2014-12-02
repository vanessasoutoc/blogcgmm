class SessionsController < ApplicationController

	def create
		if user = User.authenticate(params[:email], params[:password])
			session[:user_id] = user.id
			redirect_to root_path, :notice => "Login efetuado com sucesso."
		else
			flash.now[:alert] = "E-mail ou senha inválida, tente novamente."
			render :action => 'new'
		end
	end
	def destroy
		reset_session
		redirect_to root_path, :notice => "You successfully logged out"
	end

end
