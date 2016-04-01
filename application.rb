Bundler.require
Dotenv.load

APP_ROOT = File.expand_path(File.dirname(__FILE__))
DataMapper::setup(:default, "sqlite3://#{APP_ROOT}/db.sqlite3")

class Game
  include DataMapper::Resource

  property :id,       Serial
  property :slug,     String
  property :template, String
end

class File
  include DataMapper::Resource

  property :id,        Serial
  property :slug,      String
  property :url,       Text
  property :downloads, Integer, :default => 0
end

helpers do
  def selected_if(page)
    ' class="selected"' if @page == page
  end
end

get '/' do
  @page = 'index'
  erb 'pages/index'.to_sym
end

get '/about' do
  @page = 'about'
  erb 'pages/about'.to_sym
end

get '/download/:slug' do
  file = File.first(:slug => params[:slug])
  if !file.nil?
    file.downloads = file.downloads + 1
    file.save
    redirect file.url
  else
    raise Sinatra::NotFound
  end
end

get '/:slug' do
  @page = 'game'
  @game = Game.first(:slug => params[:slug])
  if !@game.nil?
    erb "games/#{@game.template}".to_sym
  else
    raise Sinatra::NotFound
  end
end

not_found do
  @page = 'error'
  erb 'pages/404'.to_sym
end
