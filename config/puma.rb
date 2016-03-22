threads_count = ENV.fetch("MAX_THREADS") { 3 }.to_i
threads     threads_count, threads_count
workers     ENV.fetch("WEB_CONCURRENCY") { 1 }.to_i
port        ENV.fetch("PORT") { 3002 }
environment ENV.fetch("RACK_ENV") { "development" }

# Allow puma to be restarted by `rails restart` command.
plugin :tmp_restart
