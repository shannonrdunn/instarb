require "sinatra"
require "instagram"

enable :sessions

CALLBACK_URL = "http://ec2-184-72-178-121.compute-1.amazonaws.com:4567/subscribe/callback"
TAG = "sanfrancisco"
Instagram.configure do |config|
  config.client_id = "efb5bb149cac4d329894cf5ad69ac2be"
  config.client_secret = "5885b31c06f241a1b059900081406a4c"
end

get "/" do
  '<a href="/oauth/connect">Connect with Instagram</a>'
end

get "/callback" do
	response = Instagram.get()
end

get "/oauth/connect" do
  redirect Instagram.authorize_url(:redirect_uri => CALLBACK_URL)
end

get "/subscribe/callback" do
  response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
  session[:access_token] = response.access_token
  redirect "/feed"
end

get "/feed" do
  client = Instagram.client(:access_token => session[:access_token])
  user = client.user

  html = "<h1>#{user.username}'s recently liked photos</h1>"
  for media_item in client.tag_recent_media(TAG)
    html << "<img src='#{media_item.images.thumbnail.url}'>"
  end
  html
end
