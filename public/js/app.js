//opens all external links in a new window, keeps internal links in same window
var all_links = document.querySelectorAll('a');
for (var i = 0; i < all_links.length; i++) {
  var a = all_links[i];
  if (a.hostname != location.hostname) {
    a.rel = 'noopener';
    a.target = '_blank';
  }
}

//get footer 
fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });