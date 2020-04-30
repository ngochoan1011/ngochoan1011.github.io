// JavaScript Document
		function openPopupWindow2(itemID,type){
	
		self.name = "Parent_Window";

	// get window reference	
	  winRef = window.open('http://www.englishspeak.com/ca/features/item/itemPhrase.cfm?type=' + type + '&item=' + itemID, "mywindowPhrases",
"height=390,width=800,status=no,toolbar=no,menubar=no,location=no,scrollbars=no,resizable=no");

	winRef.focus();
	}

// popup for lessons
		function openPopupWindowlessons(itemID,type){
	
		self.name = "Parent_Window";

	// get window reference	
	  winRef = window.open('http://www.englishspeak.com/ca/features/item/itemPhrase.cfm?type=' + type + '&item=' + itemID, "mywindowPhrases",
"height=400,width=800,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

	winRef.focus();
	}

//manage flash cards hanzi popup
		function openPopupWindow6(itemID){
	
		self.name = "Parent_Window";

	// get window reference	
	  winRef = window.open('http://www.englishspeak.com/dictionary/hanzi.cfm?itemID=' + itemID, "myDefinition");

	winRef.focus();
	}
	
	//manage flash cards hanzi popup
		function openPopupWindow7(itemID){
	
		self.name = "Parent_Window";

	// get window reference	
	  winRef = window.open('http://www.englishspeak.com/dictionary/compound.cfm?searchType=6' + '&itemID=' + itemID + '&from=1', "myDefinition");

	winRef.focus();
	}
	
		function populateDropDownMenu(list, selectedOption){
		for (i = 0; i < list.length; i++) {
			if (list.options[i].value == selectedOption)
				list.options[i].selected = true;
		}	
	}
	
	function viewCategoryVocabulary(a){
		op = a.options[a.selectedIndex].value;
	    if (op == -1)
			window.location = "english-words.cfm";
		else{
			window.location = "english-words.cfm?newCategoryShowed=" + op + '&sortBy=' + 28;
			//window.location = "flashCardsManage.cfm?newCategoryShowed=" + op;
		}
	}
	
			function viewCategoryPhrases(a){
		op = a.options[a.selectedIndex].value;
	    if (op == -1)
			window.location = "english-phrases.cfm";
		else{
			window.location = "english-phrases.cfm?newCategoryShowed=" + op + '&sortBy=' + 28;
			//window.location = "flashCardsManage.cfm?newCategoryShowed=" + op;
		}
	}
	
		function viewCategoryManageCards(a){
		op = a.options[a.selectedIndex].value;
	    if (op == -2)
			window.location = "flashCardsManage.cfm";
		else{
			window.location = "flashCardsManage.cfm?newCategoryShowed=" + op;
		}
	}

 	   function reloadpage() { 
		window.location.reload(true); 
	}
	       
		   
	    		function toggleAll(formObj) {
		if (formObj.checkAll.checked){
   			for (var i = 0; i < formObj.length; i++){
      			if (formObj.elements[i].type == 'checkbox'){
            		formObj.elements[i].checked = true; 
       			}
   			}
		}else{
			for (var j = 0; j < formObj.length; j++){
      			if (formObj.elements[j].type == 'checkbox'){
            		formObj.elements[j].checked = false; 
       			}
   			}
		}
	}
	
		function reviewWindow(form)
{
	self.name = "Parent_Window";
	var operation2 = "initialize";
	
	winRef = window.open('../item/flashCardReview.cfm?&operation=' + operation2 + '&setID=' + form.setID.value,
		"myWindowFlashCards",
"height=485,width=800,status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");

    winRef.focus();	

	}
	
	function limitText(limitField, limitCount, limitNum) {
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	} else {
		limitCount.value = limitNum - limitField.value.length;
	}
	}