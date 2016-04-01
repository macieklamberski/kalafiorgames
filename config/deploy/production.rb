set :branch, 'master'
set :deploy_to, ENV['DEPLOY_PATH']
set :default_env, { rvm_bin_path: '~/.rvm/bin' }
server ENV['DEPLOY_HOST'], port: ENV['DEPLOY_PORT'], user: ENV['DEPLOY_USER'], roles: %{app}
