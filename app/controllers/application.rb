# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  # Pick a unique cookie name to distinguish our session data from others'
  session :session_key => '_zombie_url_session_id'
  
  before_filter :calculate_links
  
  # refactor to some sort of cache tool
  def calculate_links
    @cached_data = {:link_count => Link.count}
  end
end
