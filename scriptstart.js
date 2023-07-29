const margin = { top: 70, right: 30, bottom: 40, left: 80 }
const width = 1200 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x = d3.scaleLinear()
            .range([0,width]);
        
const y = d3.scaleLinear()
            .range([height,0]);

const svg = d3.select(#chart-container)
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", 'translate(${margin.left},${margin.top})');

const dataset = d3.csv("https://raw.githubusercontent.com/nithinnathan/nithinnathan.github.io/master/fatalities.csv")
                .row(function(d) { return { year: d.Year, fatalities: d.Fatalities} })
                .get(function(error, data) {
                    //console.log(data);
                    var sumstat = d3.nest().entries(data);
                    //console.log(sumstat);
                });

console.log(dataset);