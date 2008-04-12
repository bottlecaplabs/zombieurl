module LinksHelper
  def mailto(anchor='mailto',subject='', body=nil,  to='', debug_info='', title=nil, onclick=nil) 
    return '' if to.blank? && subject.blank?  
    link_to(  anchor,  %{mailto:%s?subject=%s&amp;body=%s} % [  to, subject, body.strip  ].collect{ |arg| URI.escape(arg) },  :title => title,  :style => 'text-decoration: underline',  :onclick => onclick  ) 
  end
end
