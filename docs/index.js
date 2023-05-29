
// This class defines a art collection
// Allows for instancing of all images into one
// popup element for the showcase.

class _img
{
	constructor(_width, _height, _path)
	{
		this.path = _path;
		this.width = _width;
		this.height = _height;
	}
}
class artPiece
{
	constructor(_id, _name)
	{
		this.id = _id;
		this.name = _name;

		this.images = [];
	}

	addImg(imgPath, imgWidth, imgHeight)
	{
		var newImg = new _img(imgWidth, imgHeight, imgPath);
		this.images.push(newImg);
	}
}

const ap1 = new artPiece(0, "ugw");
ap1.addImg("GFX/ugw.png", 784, 414);

const ap2 = new artPiece(1, "ufg");
ap2.addImg("GFX/ufg/1.jpg", 1814, 810);
ap2.addImg("GFX/ufg/2.jpg", 1094, 809);
ap2.addImg("GFX/ufg/3.jpg", 907, 810);

const ap3 = new artPiece(2, "ns");
ap3.addImg("GFX/ns/0.jpg");
ap3.addImg("GFX/ns/1.jpg");
ap3.addImg("GFX/ns/2.jpg");
ap3.addImg("GFX/ns/3.jpg");
ap3.addImg("GFX/ns/4.jpg");

const ap4 = new artPiece(3, "mxm");
ap4.addImg("GFX/mxm/0.jpg");
ap4.addImg("GFX/mxm/1.jpg");
ap4.addImg("GFX/mxm/2.jpg");

const ap5 = new artPiece(4, "s");
ap5.addImg("GFX/s/0.jpg");
ap5.addImg("GFX/s/1.jpg");
ap5.addImg("GFX/s/2.jpg");
ap5.addImg("GFX/s/3.jpg");
ap5.addImg("GFX/s/4.jpg");
ap5.addImg("GFX/s/5.jpg");
ap5.addImg("GFX/s/6.jpg");
ap5.addImg("GFX/s/7.jpg");
ap5.addImg("GFX/s/8.jpg");
ap5.addImg("GFX/s/9.jpg");
ap5.addImg("GFX/s/10.jpg");
ap5.addImg("GFX/s/11.jpg");
ap5.addImg("GFX/s/12.jpg");
ap5.addImg("GFX/s/13.jpg");
ap5.addImg("GFX/s/14.jpg");
ap5.addImg("GFX/s/15.jpg");
ap5.addImg("GFX/s/16.jpg");
ap5.addImg("GFX/s/17.jpg");
ap5.addImg("GFX/s/18.jpg");
ap5.addImg("GFX/s/19.jpg");
ap5.addImg("GFX/s/20.jpg");
ap5.addImg("GFX/s/21.jpg");
ap5.addImg("GFX/s/22.jpg");

const ap6 = new artPiece(5, "sfa");
ap6.addImg("GFX/sfa/0.jpg");
ap6.addImg("GFX/sfa/1.jpg");
ap6.addImg("GFX/sfa/2.jpg");
ap6.addImg("GFX/sfa/3.jpg");

const ap7 = new artPiece(6, "sfbr");
ap7.addImg("GFX/sfbr/0.jpg");
ap7.addImg("GFX/sfbr/1.jpg");

const ap8 = new artPiece(7, "i");
ap8.addImg("GFX/i/0.jpg");
ap8.addImg("GFX/i/1.jpg");
ap8.addImg("GFX/i/2.jpg");

// The code above defines all art pieces and the images in each one as an instance of a class
// This code below begins the functional procedural generation of the modular popup component

var activeAp = -1;
var sc;
var scContainer
var scDiv;
var scImg;

window.onload = function(){
	sc = document.getElementById("sc");
	sc.style.display = "none";
	
	scContainer = document.getElementById('scContainer');
	scDiv = document.getElementById("scDiv");
	scImg = document.getElementById("sc_0");
}

function getActiveAp()
{
	switch(activeAp)
	{
		case 0: return ap1;
		case 1: return ap2;
		case 2: return ap3;
		case 3: return ap4;
		case 4: return ap5;
		case 5: return ap6;
		case 6: return ap7;
		case 7: return ap8;
	}
}

function setApActive(_id)
{
	activeAp = _id;
	sc.style.display = "flex";
	updateShowcasePopup();
	$("body").addClass("overscroll-none");
}

function disableAp()
{
	sc.style.display = "none";
}

function updateShowcasePopup()
{
	var current = getActiveAp();
	var toAppend = ""
	var template = "<img class='object-cover' src=';' width='$' height='*' onclick='updateMainImg(:)' />"

	var i = 0;
	current.images.forEach(e => {
		toAppend += template.replace(";", e.path).replace("$", e.width).replace("*", e.height).replace(":", i) + '\n';
		console.log(toAppend);
		i++;
	});
	scDiv.innerHTML = toAppend

	updateMainImg(0)
}

function updateMainImg(id)
{
	var current = getActiveAp();
	scImg.width = current.images[id].width;
	scImg.height = current.images[id].height;
	scImg.src = current.images[id].path;
	scContainer.scroll({top:0,behavior:'smooth'});
}
