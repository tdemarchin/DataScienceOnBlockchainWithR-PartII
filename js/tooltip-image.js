// Start of the tooltip-image.js file
// inspired, in part, by https://stackoverflow.com/a/48174836/1583084
function(el) {
  var tooltip = Plotly.d3.select('#' + el.id + ' .svg-container')
    .append("div")
    .attr("class", "my-custom-tooltip");

  el.on('plotly_hover', function(d) {
    var pt = d.points[0];

    // Insert the base64 encoded image
    var img = "<img src='" +  pt.customdata + "' width=150>";
		
    tooltip.html(img)
      .style("position", "absolute")
      .style("left", 100 + "px")
      .style("top", 100 + "px");
    // Fade in the image
    tooltip.transition()
      .duration(300)
      .style("opacity", 1);
  });

  el.on('plotly_unhover', function(d) {
    // Fade out the image
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });
}