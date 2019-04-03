(function(){
	$('.nav-pill-icode').on('click', function(){
		$('.nav-pill-icode').removeClass('active');
		$(this).toggleClass('active').find('.sub-nav-pill-icode').toggle('fast');
		
	});
	/*------------*/
	var ctx = document.getElementById('month_graph').getContext('2d');
	var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
	gradientFill.addColorStop(0, "rgba(233, 218, 124, 0.6)");
	gradientFill.addColorStop(1, "rgba(233, 124, 149, 0.6)");
	var chart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: ["", "2.03", "3.03", "4.03", "5.03", "8.03", "9.03", "10.03", "11.03", "12.03", "15.03", "16.03", "17.03", "18.03", "19.03", "20.03","21.03", "22.03", "23.03", ""],
	        datasets: [
	        {
	          label: 'Total places',
	          data: [10, 11, 10, 12, 10, 10, 9, 10, 10, 10, 10, 12, 10, 10, 9, 10, 11, 10, 10, 12],
	          borderColor: 		'#dc35459c',
	          borderWidth: 1,
	          fill: false, 
	          backgroundColor: 	'#dc35459c',
	          spanGaps: true,
	          pointRadius: 0,
	          type: 'line',
	        },
	        {
	          label: 'Students',
	          data: [ 6, 5, 7, 2, 4, 
			          4, 2, 9, 5,  9, 
			          4, 9, 6, 10, 7, 
			          12, 10, 6, 4, 2],

	          borderColor: 		'rgba(255,255,255,1)',
	          backgroundColor: 	'#7c84e9b8',
	          borderWidth : 1,
	          spanGaps: true,
	          pointRadius: 0,
	          type: 'line',
	        },
	        {
	        	type: 'line',
	            label: 'Anwesend',
	            borderColor: 		'rgba(0,0,0,0)',
	            backgroundColor: 	gradientFill,//'#FFB74D',
	            color: '#f7464a',
	            hoverBackgroundColor: '#eb4844',
	            pointRadius: 1,
	            data: [14, 10, 15, 12, 7, 11, 14, 10, 15, 12, 7, 11, 14, 10, 15, 12, 7, 11, 14, 10],
	        }]
	    },
	    options: {
	    	layout: {
		        padding: {
		            left: 0,
		            right: 0,
		            top: 0,
		            bottom: 0
		        }
		    },
	    	responsive: true,
		    legend: {
		       padding: 50,
		       usePointStyle: true
		    },
		    tooltips: {
			  mode: 'x-axis',
			  callbacks: {
                    title: function(tooltipItems, data) {
                    	var gsDayNames = ['Sunday', 'Monday', 'Tuesday',
							'Wednesday', 'Thursday','Friday', 'Saturday'];
						var d = tooltipItems[0].xLabel+'.'+new Date().getFullYear();
						var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
						d = new Date(d.replace(pattern,'$3-$2-$1'));
			            return gsDayNames[d.getDay()] +' ' + tooltipItems[0].xLabel;
			        },
                }

			},
		    scales: {
		        xAxes: [{
		            gridLines: {
		            	display: false 
		            },
		            ticks: {
	                    onHover: function(){
	                    	console.log(true);
	                    }
	                }
		        }],
		        yAxes: [{
		            gridLines: {  
		            	drawBorder: false 
		            },
		            ticks: { 
		            	
		            },
		           
		        }]
		    }
		}
	});
	/*------------*/
	Chart.defaults.derivedDoughnut = Chart.defaults.doughnut;
	var customDoughnut = Chart.controllers.doughnut.extend({
  	draw: function(ease) {
	    Chart.controllers.doughnut.prototype.draw.apply(this, [ease]);
	    var width = this.chart.chart.width,
	      height = this.chart.chart.height,
	      titleHeight = this.chart.titleBlock.height,
	      legendHeight = this.chart.legend.height;
	   
	    var fontSize = (height / 114).toFixed(2);
	    var ctx = this.chart.chart.ctx;
	    ctx.font = fontSize + "em Roboto";
	    ctx.fillStyle = '#3d3f40';
	    ctx.textBaseline = "middle";
	    var text = '',
	      textX = Math.round((width - ctx.measureText(text).width) / 2),
	      textY = (height+titleHeight+legendHeight)  / 2;

	    ctx.fillText(text, textX+60, textY-125);
	  }
	});

	Chart.controllers.derivedDoughnut = customDoughnut;

	var colors = [
		'#f54a3dc9',
	    '#f54a3d96',
	    '#f54a3d57',
	    '#dfe4ef'
	];
	var data = [6, 4, 2, 9];
	var config = {
	  type: 'derivedDoughnut',
	  data: {
	  	labels: ['Student','Teilzeit','Vollzeit','Abwesend'],
	    datasets: [{
	      data: data,
	      backgroundColor: colors,
	      borderColor: 'rgb(0,0,0,0)',
	    }],
	  },
	  options: {
	    responsive: true,
	    legend: {
	      display: true,
	      fullWidth: true,
	      position: 'left'
	    },
	    animation: {
	      animation: 'easeInCubic'
	    }
	  }
	};

	var ctx = document.getElementById("day_graph").getContext("2d");
	window.myDoughnut = new Chart(ctx, config);

	/*----------*/
	var ctx = document.getElementById('week_graph');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ['Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
	        datasets: [{
	            label: 'Anwesend',
	            data: [12, 19, 13, 15, 12, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.5)',
	                'rgba(54, 162, 235, 0.5)',
	                'rgba(255, 206, 86, 0.5)',
	                'rgba(75, 192, 192, 0.5)',
	                'rgba(153, 102, 255, 0.5)',
	                'rgba(255, 159, 64, 0.5)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 0)',
	                'rgba(54, 162, 235, 0)',
	                'rgba(255, 206, 86, 0)',
	                'rgba(75, 192, 192, 0)',
	                'rgba(153, 102, 255, 0)',
	                'rgba(255, 159, 64, 0)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true,
	                    display: false
	                },
	                gridLines: {display: false, drawBorder: false },
	            }],
	            xAxes: [{
	                gridLines: {display: false, drawBorder: false },
	            }],
	        }
	    }
	});
})();
