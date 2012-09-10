load 'haml_mobile_ex.rb'

def render(partial)
  Haml::Engine.new(File.read("_#{partial}.haml")).render
end

def generate(template_name)
  template = File.read("_#{template_name}.haml")
  haml_engine = Haml::Engine.new(template)
  output = haml_engine.render
  html_page = File.new("_#{template_name}.html", "w")
  html_page.write(output)
end