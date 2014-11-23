require 'sinatra'
require 'net/http'
require 'dm-core'
require 'dm-sqlite-adapter'

# -- Configuration -------------------------------------------------------------

APP_ROOT = File.expand_path(File.dirname(__FILE__))

DataMapper::setup(:default, "sqlite3://#{APP_ROOT}/db.sqlite3")
DataMapper::Model.raise_on_save_failure = true if development?

# -- Models --------------------------------------------------------------------

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
  property :url,       Text, :length => 0..1000
  property :downloads, Integer, :default => 0
end

# -- Helpers -------------------------------------------------------------------

helpers do
  def selected_if(page)
    ' class="selected"' if @page == page
  end
end

# -- Actions -------------------------------------------------------------------

# Index
get '/' do
  @page = 'index'
  erb 'pages/index'.to_sym
end

# About
get '/about' do
  @page = 'about'
  erb 'pages/about'.to_sym
end

# Files download
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

# Game details
get '/:slug' do
  @page = 'game'
  @game = Game.first(:slug => params[:slug])
  if !@game.nil?
    erb "games/#{@game.template}".to_sym
  else
    raise Sinatra::NotFound
  end
end

# Error 404
not_found do
  @page = 'error'
  erb 'pages/404'.to_sym
end
