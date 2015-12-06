//Function that change the style with select
function changestyle()
{					
	chrome.storage.sync.get(function(items) 
	{
		var selected = items.value;
		
		if (selected == 1 || typeof selected === 'undefined' )
		{
			document.getElementById("pagestyle").setAttribute("href", "PopupFile/basic.css");
		}
		else if (selected == 2)
		{
			document.getElementById("pagestyle").setAttribute("href", "PopupFile/giant.css");
		}
		else if (selected == 3)
		{
			document.getElementById("pagestyle").setAttribute("href", "PopupFile/coffee.css");
		}
	});
}

//Function that change the size with select
function changesize()
{					
	chrome.storage.sync.get(function(items) 
	{
		var selecteds = items.values;
		
		if (selecteds == 1)
		{
			document.getElementById("pagesize").setAttribute("href", "PopupFile/small.css");
		}
		else if (selecteds == 2  || typeof selecteds === 'undefined' )
		{
			document.getElementById("pagesize").setAttribute("href", "PopupFile/medium.css");
		}
		else if (selecteds == 3)
		{
			document.getElementById("pagesize").setAttribute("href", "PopupFile/big.css");
		}
	});
}

document.addEventListener('DOMContentLoaded', changestyle);
document.addEventListener('DOMContentLoaded', changesize);