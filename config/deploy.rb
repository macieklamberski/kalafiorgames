require 'dotenv'
Dotenv.load

set :application, 'kalafiorgames'
set :repo_url, 'https://github.com/lamberski/kalafiorgames.git'
set :linked_files, ['.env', ENV['DB_PATH']]
set :linked_dirs, ['public/files', 'tmp']

namespace :deploy do
  desc 'Restart the application'
  task :restart do
    on roles(:app) do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :publishing, :restart
end
