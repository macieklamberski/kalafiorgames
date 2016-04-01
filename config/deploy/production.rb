set :branch, 'master'
set :deploy_to, ENV['DEPLOY_PATH']
server ENV['DEPLOY_HOST'], port: ENV['DEPLOY_PORT'], user: ENV['DEPLOY_USER'], roles: %{all}
