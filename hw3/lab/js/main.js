d3.csv("data/cities.csv", function(data) {
  console.log("Data loading complete. Work with dataset.");
  console.log(data);
});
console.log("Do something else, without the data");