var data = [[39,173], [39,175],
            [40,170], [40,168],
            [41,177], [41,173],
            [42,174], [42,176], [42,175], [42,174], [42,171],
            [43,179], [43,175], [43,194], [43,175,],
            [44,185],
            [45,184], [45,188],
            [46,181],
            [47,194], [47,189],
            [48,196]];

    var margin = {top: 20, right: 15, bottom: 60, left: 60}
      , width = 960 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
              .domain([38, d3.max(data, function(d) { return d[0]; })])
              .range([ 0, width ]);

    var y = d3.scale.linear()
    	      .domain([165, d3.max(data, function(d) { return d[1]; })])
    	      .range([ height, 0 ]);

    var chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')

    // draw the x axis
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

    main.append('g')
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("x", width / 2)
      .attr("y", margin.bottom - 10)
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Schoenmaat");

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height/2)
      .attr("y", -margin.bottom)
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Lengte");

    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d,i) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 8);
