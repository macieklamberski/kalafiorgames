require 'rubygems'
require 'bundler'

Bundler.require

require File.dirname(__FILE__) + '/kalafiorgames.rb'
run Sinatra::Application
