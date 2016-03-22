workers Integer(ENV['WEB_CONCURRENCY'] || 1)
threads_count = Integer(ENV['MAX_THREADS'] || 3)
threads threads_count, threads_count

preload_app!

rackup      DefaultRackup

bind 'tcp://0.0.0.0:3002'
