require 'net/ssh/proxy/command'
require 'sshkit'
require 'sshkit/dsl'
include SSHKit::DSL


SSHKit.config.output_verbosity = :debug

####
####
# Modify the following constants
APP_SSH = 'deploy@18.138.59.110'
APP_PATH = '/home/deploy/client'
####
####

run_locally do
  execute 'npm run build'
  execute 'env GZIP=-9 tar -zcvf dist.tar.gz build'
end

on APP_SSH do
  execute "mkdir -p #{APP_PATH}/dist/app-client"
  upload! 'dist.tar.gz', APP_PATH
  execute "rm -r #{APP_PATH}/dist/app-client && cd #{APP_PATH} && tar xvf dist.tar.gz"
end