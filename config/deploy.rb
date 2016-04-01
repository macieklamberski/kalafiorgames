require 'dotenv'
Dotenv.load

set :application, 'kalafiorgames'
set :repo_url, 'https://github.com/lamberski/kalafiorgames.git'
set :linked_files, ['.env', ENV['DB_PATH']]
