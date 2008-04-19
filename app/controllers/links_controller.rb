class LinksController < ApplicationController

  def index
    @link = Link.new
    render :action => 'index', :layout => "noscream"
  end
  
  def show
    @link = Link.find_by_token params[:token]
    raise ActiveRecord::RecordNotFound unless @link
  end

  def create
    website_url = params.include?(:website_url) ? params[:website_url] : params[:link][:website_url]
    @link = Link.find_or_create_by_website_url( website_url )
    @link.ip_address = request.remote_ip if @link.new_record?
    
    if @link.save
      calculate_links # application controller, refactor soon
      redirect_to :action => "show", :token => @link.token
    else
      flash[:warning] = 'There was an issue trying to create your RubyURL.'
      redirect_to :action => :invalid
    end
  end

  def redirect
    @link = Link.find_by_token( params[:token] )

    unless @link.nil?
      @link.add_visit(request)
      redirect_to @link.website_url, { :status => 301 }
    else
      redirect_to :action => 'invalid'
    end
  end
end
