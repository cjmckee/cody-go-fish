$(document).ready(function() {

var turn;
var usermatches = 0;
var compmatches = 0;
var title;
var total;

var search = function (value) {
var check = false;
for (var u = 0; u < this.length; u++)
{ if (this[u] == value)
	check = true; }
return check; }


var change = function (value) {
value = Math.floor(value / 4);
value += 1;
if (value == 14)
value = 13;
return value;}

var start = function () {

var turn = 0;

var deck = new Array(52);
for (var k = 0; k < 52; k++)
{ deck[k] = k;
deck[k] = change(deck[k]); }

var m = deck.length, t, i;

while (m > 0) {

i = Math.floor(Math.random() * m--)

t = deck[m];
deck[m] = deck[i];
deck[i] = t; }

var person = new Array(5);
console.log(person);
var comp = new Array(5);
console.log(comp)
var stuff = 0;

person = deck.slice(47, 52);
comp = deck.slice(42, 47);

deck.splice(42,10);
console.log(deck);

console.log(person);
console.log(comp);

for (var x = 0; x < 5; x++)
{ console.log(person[x] + " " + comp[x]);
var c = person[x];
switch(c) {
	case 13:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/200px-Playing_card_spade_K.svg.png";
		break;
	case 12:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/200px-Playing_card_spade_Q.svg.png";
		break;
	case 11:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/200px-Playing_card_spade_J.svg.png";
		break;
	case 10:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/200px-Playing_card_spade_10.svg.png";
		break;
	case 9:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/200px-Playing_card_spade_9.svg.png";
		break;
	case 8:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png";
		break;
	case 7:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png";
		break;
	case 6:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/200px-Playing_card_spade_6.svg.png";
		break;
	case 5:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/200px-Playing_card_spade_5.svg.png";
		break;
	case 4:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/200px-Playing_card_spade_4.svg.png";
		break;
	case 3:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/200px-Playing_card_spade_3.svg.png";
		break;
	case 2:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png";
		break;
	case 1:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png";
		break;
}
$('.hand').append($('<label class = ' + c + '><input type="radio" name="user" class = ' + c +' value=' + c + ' /><img src = ' + title + ' /></label>')); }

var help = 0;
for(var y = 0; y < person.length; y++)
{ for (var a = 0; a < person.length; a++)
	{ if (person[y] == person[a] && y != a)
		{ help = person[y];
		$("input").remove('.' + person[y] + '');
			$("label").remove('.' + person[y] + '');
			person.splice(y, 1);
			person.splice(a - 1, 1);
			usermatches += 1; 
			y = 0;
			a = 0;}}}

for (var ron = 0; ron < person.length; ron++)
{if (person[ron] == help)
	{	switch(help) {
	case 13:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/200px-Playing_card_spade_K.svg.png";
		break;
	case 12:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/200px-Playing_card_spade_Q.svg.png";
		break;
	case 11:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/200px-Playing_card_spade_J.svg.png";
		break;
	case 10:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/200px-Playing_card_spade_10.svg.png";
		break;
	case 9:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/200px-Playing_card_spade_9.svg.png";
		break;
	case 8:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png";
		break;
	case 7:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png";
		break;
	case 6:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/200px-Playing_card_spade_6.svg.png";
		break;
	case 5:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/200px-Playing_card_spade_5.svg.png";
		break;
	case 4:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/200px-Playing_card_spade_4.svg.png";
		break;
	case 3:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/200px-Playing_card_spade_3.svg.png";
		break;
	case 2:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png";
		break;
	case 1:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png";
		break;
}
$('.hand').append($('<label class = ' + help + '><input type="radio" name="user" class = ' + help +' value=' + help + ' /><img src = ' + title + ' /></label>')); }}

if (usermatches == 2)
{var safe = person[0];
switch(safe) {
	case 13:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/200px-Playing_card_spade_K.svg.png";
		break;
	case 12:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/200px-Playing_card_spade_Q.svg.png";
		break;
	case 11:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/200px-Playing_card_spade_J.svg.png";
		break;
	case 10:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/200px-Playing_card_spade_10.svg.png";
		break;
	case 9:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/200px-Playing_card_spade_9.svg.png";
		break;
	case 8:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png";
		break;
	case 7:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png";
		break;
	case 6:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/200px-Playing_card_spade_6.svg.png";
		break;
	case 5:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/200px-Playing_card_spade_5.svg.png";
		break;
	case 4:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/200px-Playing_card_spade_4.svg.png";
		break;
	case 3:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/200px-Playing_card_spade_3.svg.png";
		break;
	case 2:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png";
		break;
	case 1:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png";
		break;
}
$('.hand').append($('<label class = ' + safe + '><input type="radio" name="user" class = ' + safe +' value=' + safe + ' /><img src = ' + title + ' /></label>')); }

			
for(var ya = 0; ya < comp.length; ya++)
{ for (var aa = 0; aa < comp.length; aa++)
	{ if(comp[ya] == comp[aa] && ya != aa)
		{comp.splice(ya, 1);
		comp.splice(aa - 1, 1);
		compmatches += 1;
			ya = 0;
			aa = 0;} } }

turn = 0;

console.log(usermatches + " " + compmatches);
console.log(person);
console.log(comp);

var personmove = new Array(0);
var compmove = new Array(0);

$("input").remove('#start');
$('#usermatches').text(usermatches);
$('#computermatches').text(compmatches);
$('#deck').text(deck.length);
$('#turn').text("It is your turn. Select a card you would like to ask the computer for.");

var advance = function () {

if (turn % 2 == 0)
	{var pick = $('input[name=user]:checked').val();
	pick = parseInt(pick);
	console.log("pick: " + pick);
	var mine = person.indexOf(pick);
	var match = comp.indexOf(pick);
	console.log("match " + match);
	
	if (pick == NaN)
		{$('#comment').text("You forgot to pick a card. Please try again!");
		turn--; }
	else 
	{
	if (match == -1)
	{ 	if (pick == 13)
		title = "King";
		else if (pick == 12)
		title = "Queen";
		else if (pick == 11)
		title = "Jack";
		else if (pick == 1)
		title = "Ace";
		else
		title = pick;
	$('#comment').text("You asked for a " + title + ". Go Fish! ");
		if (deck.length > 0)
		{ var draw = deck[deck.length - 1];
		draw = parseInt(draw);
		var can = person.indexOf(draw);
		can = parseInt(can);
		console.log("can: " + can);
		switch(draw) {
	case 13:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/200px-Playing_card_spade_K.svg.png";
		break;
	case 12:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/200px-Playing_card_spade_Q.svg.png";
		break;
	case 11:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/200px-Playing_card_spade_J.svg.png";
		break;
	case 10:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/200px-Playing_card_spade_10.svg.png";
		break;
	case 9:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/200px-Playing_card_spade_9.svg.png";
		break;
	case 8:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png";
		break;
	case 7:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png";
		break;
	case 6:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/200px-Playing_card_spade_6.svg.png";
		break;
	case 5:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/200px-Playing_card_spade_5.svg.png";
		break;
	case 4:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/200px-Playing_card_spade_4.svg.png";
		break;
	case 3:
		title= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/200px-Playing_card_spade_3.svg.png";
		break;
	case 2:
		title= "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png";
		break;
	case 1:
		title= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png";
		break;}
		
		if (can = -1)
		{ $('.hand').append($('<label class = ' + draw + '><input type="radio" name="user" class = ' + draw +' value=' + draw + ' /><img src = ' + title + ' /></label>'));
		person.splice(person.length, 0, draw);
		deck.splice(deck.length - 1, 1);
		if (personmove.length < 6)
		{ personmove.splice(personmove.length, 1, pick); }
		else
		{ personmove.splice(0, 1);
		personmove.splice(personmove.length, 1, pick); } }
		else
		{ $('#comment').append("You drew a match!");
		person.splice(can, 1);
		usermatches += 1; 
		deck.splice(deck.length - 1, 1);} }
		
		turn++;
		console.log("turn:" + turn);
		console.log("personlist: " + personmove);
		console.log("complist: " + compmove);
		
		
		console.log("draw: " + draw);
		
		for(var h = 0; h < person.length; h++)
		{ for (var j = 0; j < person.length; j++)
		{ if (person[h] == person[j] && h != j)
		{ $('#comment').append("You got a match from your draw!");
		$("input").remove('.' + person[h] + '');
			$("label").remove('.' + person[h] + '');
			person.splice(h, 1);
			person.splice(j - 1, 1);
			usermatches += 1; 
			h = 0;
			j = 0;} } }}}
	else
	{ $('#comment').text("It's a match! Ask again.");
		$("input").remove('.' + pick + '');
		$("label").remove('.' + pick + '');
		person.splice(mine, 1);
		comp.splice(match, 1);
		usermatches += 1;}}
	
	$('#turn').text("It is the computer's turn. Select next turn to advance.");}	
else
	{ var ind = Math.floor(Math.random() * comp.length);
	ind = parseInt(ind);
	comppick = comp[ind];
	
	var hannah = -1;
	for (var q = 0; q < comp.length; q++)
	{ for (var w = 0; w < personmove.length; w++)
		{ if (comp[q] == personmove[w])
			{ hannah = q; }
		}
	}
	if (hannah != -1)
	{comppick = comp[hannah]; }
	else
	{ var attempt = 0;
		while (compmove.indexOf(comppick) != -1 && attempt < 3)
		{ ind = Math.floor(Math.random() * comp.length);
			comppick = comp[ind];
			attempt += 1; }}
	
	console.log(comppick);
	var compmatch = person.indexOf(comppick);
	compmatch = parseInt(compmatch);
	console.log("Comp match: " + compmatch);
	
	if (compmatch == -1)
	{ if (comppick == 13)
		title = "King";
		else if (comppick == 12)
		title = "Queen";
		else if (comppick == 11)
		title = "Jack";
		else if (comppick == 1)
		title = "Ace";
		else
		title = comppick;
	$('#comment').text("The computer asked for a " + title + ". Go Fish!");
		if (deck.length > 0)
		{ var compdraw = deck[deck.length - 1];
		var trash = comp.indexOf(compdraw);
		trash = parseInt(trash);
		console.log("trash: " + trash);
		if (trash == -1)
		{ comp.splice(comp.length, 0, compdraw);
		deck.splice(deck.length - 1, 1); 
		if (compmove.length < 5)
		{ compmove.splice(compmove.length, 1, comppick); }
		else 
		{ compmove.splice(0, 1);
		compmove.splice(compmove.length, 1, comppick); } }
		else
		{ $('#comment').append("The computer drew a match!");
		comp.splice(trash, 1);
		compmatches += 1; 
		deck.splice(deck.length - 1, 1); 
		if (compmove.length < 5)
		{ compmove.splice(compmove.length, 1, comppick); }
		else 
		{ compmove.splice(0, 1);
		compmove.splice(compmove.length, 1, comppick); } } }
		turn ++;
		console.log("turn:" + turn);
		console.log("personlist: " + personmove);
		console.log("complist: " + compmove);
		
		console.log("comp draw: " + compdraw);
		}
	else
	{ if (comppick == 13)
		title = "King";
		else if (comppick == 12)
		title = "Queen";
		else if (comppick == 11)
		title = "Jack";
		else if (comppick == 1)
		title = "Ace";
		else
		title = comppick;
	$('#comment').text("The computer asked for a " + title + ". It was a match. It will now guess again.");
		$("input").remove('.' + comppick + '');
		$("label").remove('.' + comppick + '');
		person.splice(compmatch, 1);
		if (hannah != -1)
		{ comp.splice(hannah, 1); }
		else
		{comp.splice(ind, 1); }
		compmatches += 1;} 
		
	$('#turn').text("It is your turn. Select a card you would like to ask the computer for.");	
	}
	
	console.log("person: " + person);
	console.log("comp: " + comp);
	
	if (comp.length == 0 && deck.length != 0)
	{ var p = deck[deck.length - 1];
	if (p == 13)
	title = "King";
	else if (p == 12)
	title = "Queen";
	else if (p == 11)
	title = "Jack";
	else if (p == 1)
	title = "Ace";
	else
	title = p;
	comp.splice(0, 0, p);
	deck.splice(deck.length - 1, 1); }
	
	if (person.length == 0 && deck.length != 0)
	{ var t = deck[deck.length - 1];
	t = parseInt(t);
	switch(t) {
	case 13:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/200px-Playing_card_spade_K.svg.png";
		break;
	case 12:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/200px-Playing_card_spade_Q.svg.png";
		break;
	case 11:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/200px-Playing_card_spade_J.svg.png";
		break;
	case 10:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/200px-Playing_card_spade_10.svg.png";
		break;
	case 9:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/200px-Playing_card_spade_9.svg.png";
		break;
	case 8:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png";
		break;
	case 7:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png";
		break;
	case 6:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/200px-Playing_card_spade_6.svg.png";
		break;
	case 5:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/200px-Playing_card_spade_5.svg.png";
		break;
	case 4:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/200px-Playing_card_spade_4.svg.png";
		break;
	case 3:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/200px-Playing_card_spade_3.svg.png";
		break;
	case 2:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/200px-Playing_card_spade_2.svg.png";
		break;
	case 1:
		title = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/200px-Playing_card_spade_A.svg.png";
		break;
}
$('.hand').append($('<label class = ' + t + '><input type="radio" name="user" class = ' + t +' value=' + t + ' /><img src = ' + title + ' /></label>'));
	person.splice(0, 0, t);
	deck.splice(deck.length - 1, 1); }
	
	
			
$('#usermatches').text(usermatches);
$('#computermatches').text(compmatches);
$('#deck').text(deck.length);

total = usermatches + compmatches;
console.log("total: " + total);

$("input[type='radio']").prop("checked", false);

if (total == 26)
{ if (usermatches > compmatches)
	$('#comment').text("Game over! YOU WIN!");
	else if (compmatches > usermatches)
	$('#comment').text("Game over! You lose!");
	else
	$('#comment').text("Game over! You tied!"); }
} 
$('#gofish').click(function() {
advance(); });
}




$("#start").click(function() {
    start();});

});
