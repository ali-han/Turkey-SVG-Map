var tooltip = document.querySelector("#tooltip");
var cities = document.querySelectorAll("g#turkey > g");
cities.forEach(function (city) {
  city.addEventListener("mousemove", tooltip_position);
  city.addEventListener("mouseleave", hide_tooltip);
});

// Show the tooltip and set the tooltip content
function tooltip_position(e) {
  // Get the attributes of the city
  var cityCode = this.dataset.cityCode;
  var cityName = this.dataset.cityName;

  // Set the tooltip content
  tooltip.innerHTML =
    '<div class="plate"><b>' +
    cityCode +
    "</b><span>" +
    cityName +
    "</span></div>";

  // Set the tooltip position
  tooltip.style.left = e.pageX + "px";
  tooltip.style.top = e.pageY + "px";
  tooltip.style.display = "block";
}

// Hide the tooltip
function hide_tooltip() {
  tooltip.style.display = "none";
}
