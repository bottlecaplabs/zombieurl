begin
  require '/etc/email.god'
rescue LoadError
end

RAILS_ROOT = "/var/www/apps/zombieurl"
 
# mongrel_rails start -c /var/www/apps/zombieurl -e production -p 3000 -P /var/www/apps/zombieurl/log/mongrel.3000.pid  -d
 
%w{3000 3001 3002}.each do |port|
  God.watch do |w|
    w.name = "zombieurl-mongrel-#{port}"
    w.group = 'mongrels'
    w.interval = 30.seconds # default      
    w.start = "mongrel_rails start -c #{RAILS_ROOT} -e production -p #{port} \
      -P #{RAILS_ROOT}/log/mongrel.#{port}.pid  -d"
    w.stop = "mongrel_rails stop -P #{RAILS_ROOT}/log/mongrel.#{port}.pid"
    w.restart = "mongrel_rails restart -P #{RAILS_ROOT}/log/mongrel.#{port}.pid"
    w.start_grace = 20.seconds
    w.restart_grace = 20.seconds
    w.pid_file = File.join(RAILS_ROOT, "log/mongrel.#{port}.pid")
    
    w.behavior(:clean_pid_file)
 
    w.start_if do |start|
      start.condition(:process_running) do |c|
        c.running = false
        # c.notify = 'jchris'
      end
    end
    
    w.restart_if do |restart|
      restart.condition(:memory_usage) do |c|
        c.above = 150.megabytes
        c.times = [3, 5] # 3 out of 5 intervals
        # c.notify = 'jchris'
      end
    
      restart.condition(:cpu_usage) do |c|
        c.above = 50.percent
        c.times = 5
        # c.notify = 'jchris'
      end
    end
    
    # lifecycle
    w.lifecycle do |on|
      on.condition(:flapping) do |c|
        c.to_state = [:start, :restart]
        c.times = 5
        c.within = 5.minute
        c.transition = :unmonitored
        c.retry_in = 10.minutes
        c.retry_times = 5
        c.retry_within = 2.hours
        # c.notify = 'jchris'
      end
    end
  end
end