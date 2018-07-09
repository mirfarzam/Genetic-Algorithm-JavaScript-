function genericAlgo(popSize,chromSize,selectRate,mutationRate) {
	
	var fitnesstemp=0;
	
	var population=[];

	for (var i = 0; i < popSize; i++) {
		population.push([]);
		for (var j = 0; j <chromSize ; j++) {
			population[i].push(Math.random()*64-32);
		}
	}

	for (var i = 0; i < 100; i++) {

		fitnesstemp = 0 ; 

		var selected=select(population,selectRate);
		
		var crossovered=crossover(selected,popSize-selected.length);

		var mutated=mutation(crossovered,mutationRate);

		population=selected.concat(mutated);

		for(var m=0 ; m < popSize ; m++)
		{
			fitnesstemp = fitnesstemp + fitness(population[m]);
		}
	
		var table = document.getElementById("myTable");
 	    var row = table.insertRow(0);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	cell1.innerHTML = "generation" + i;
    	cell2.innerHTML = "totall fitness " + fitnesstemp;

	}
}

function fitness(x) {
	var a=20;
	var b=0.2;
	var c=2*Math.PI;
	var sigma1=0,sigma2=0;
	d = x.length;
	for (var i = 0; i < x.length; i++) {
		sigma1+=x[i]*x[i];
	}

	for (var i = 0; i < x.length; i++) {
		sigma2+=Math.cos(c*x[i]);
	}
	var fitness = -a*Math.exp(-b*Math.sqrt((1/d)*sigma1)) - Math.exp((1/d)*sigma2) + a + Math.E ;
	return fitness;
}

function select(pop,num){
	var sel=[];
for (var i = 0; i < num; i++) {
	var temp1,temp2;
	temp1=Math.random()*pop.length | 0;
	temp2=Math.random()*pop.length | 0;
	if(fitness(pop[temp1])<fitness(pop[temp2]))
		sel.push(pop[temp1]);
	else
		sel.push(pop[temp2]);

}
	return sel;
}

function crossover(sel,num){
	var temp1,temp2;
	var crossout=[]
	for (var i = 0; i < num; i++) {
		temp1=Math.random()*sel.length | 0;
		temp2=Math.random()*sel.length | 0;
		var par1=sel[temp1];
		var par2=sel[temp2];
		var breakpoit=Math.random()*par1.length | 0;
		var child1=par1.slice(0,breakpoit).concat(par2.slice(breakpoit));
		var child2=par2.slice(0,breakpoit).concat(par1.slice(breakpoit));	
		crossout.push(child1);
		crossout.push(child2);
	}
	return crossout;
}

function mutation(crossout,num){
	var temp;
	for (var i = 0; i < num; i++) {
			temp=Math.random()*crossout.length | 0;
			var gen=Math.random()*crossout[temp].length | 0;
			crossout[temp][gen]=Math.random()*64-32;
	}
	return crossout;
}




$(".sabt").click( function()
  {
            var popsize = parseInt(document.getElementById('popsize').value);
            console.log(popsize);
            var chromsize = parseInt(document.getElementById('chromsize').value);
            var selerate = parseInt(document.getElementById('selerate').value);
            var murate = parseInt(document.getElementById('murate').value);
            genericAlgo(popsize,chromsize,selerate,murate);
  }
  );