require 'haml'

def head_bar(args)
    template = File.read('_head_bar.haml').gsub("@{title_id}", args[:title_id]?args[:title_id]:"")
    Haml::Engine.new(template).render Object.new, args
end

def input_box(args)
    if(!args[:id])
      args[:id] = args[:name]
    end
    template = File.read('_input_box.haml').gsub("@{id}", args[:id])
    Haml::Engine.new(template).render Object.new, args
end