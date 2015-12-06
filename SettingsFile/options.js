//This function initializes the select with default or selected value from local storage
function initstatus(){
	chrome.storage.sync.get(function(items) 
		{
			var selected = items.value;
			var selecteds = items.values;
		
			if (selected == 1)
			{
				document.getElementById("calcstyle").selectedIndex = "0";
			}
			else if (selected == 2)
			{
				document.getElementById("calcstyle").selectedIndex = "1";
			}
			else if (selected == 3)
			{
				document.getElementById("calcstyle").selectedIndex = "2";
			}
			//Set radio and style to default, that is "basic"
			else
			{
				document.getElementById("calcstyle").selectedIndex = "0";
				saveintostorage(1);
				location.reload();
			}

			if (selecteds == 1)
			{
				document.getElementById("calcsize").selectedIndex = "0";
			}
			else if (selecteds == 2)
			{
				document.getElementById("calcsize").selectedIndex = "1";
			}
			else if (selecteds == 3)
			{
				document.getElementById("calcsize").selectedIndex = "2";
			}
			//Set radio and size to default, that is "medium"
			else
			{
				document.getElementById("calcsize").selectedIndex = "1";
				saveintostorages(2);
				location.reload();
			}
		});
}


//Function to save the selected style into local storage
function saveintostorage(valueofstyle)
{
	chrome.storage.sync.set({'value': valueofstyle}, function() 
	{
    	console.log("Data saved!");
    });
}

//Function to change the selected size into local storage
function saveintostorages(valueofsize)
{
	chrome.storage.sync.set({'values': valueofsize}, function() 
	{
    	console.log("Data size saved!");
    });
}

//Call the function initstatus at the start of the page
document.addEventListener('DOMContentLoaded', initstatus);

//Get the selected style and call the function to save it in local storage
document.getElementById('calcstyle').addEventListener('change', function() 
    {
    	console.log(document.getElementById('calcstyle').value);
    	if (document.getElementById('calcstyle').value == 'basic')
    	{
    		saveintostorage(1);
    	}
    	else if (document.getElementById('calcstyle').value == 'giant')
    	{
    		saveintostorage(2);
    	}
    	else if (document.getElementById('calcstyle').value == 'coffee')
    	{
    		saveintostorage(3);
    	}

    });

//Get the selected position and call the function to save it in local storage
document.getElementById('calcsize').addEventListener('change', function() 
    {
    	console.log(document.getElementById('calcsize').value);
    	if (document.getElementById('calcsize').value == 'small')
    	{
    		saveintostorages(1);
    	}
    	else if (document.getElementById('calcsize').value == 'medium')
    	{
    		saveintostorages(2);
    	}
    	else if (document.getElementById('calcsize').value == 'big')
    	{
    		saveintostorages(3);
    	}

    });