class Renderer {
  constructor() {}
  render(data) {
    const source = $("#recipes-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ recipes: data });
    $("#recipes").append(newHTML);
  }
}
