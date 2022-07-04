const tables = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const tab = document.getElementById('tabs1');

const tabsArr = Array.from(tables);
  
tab.onclick = function(e) {
  const tabIndex = tabsArr.indexOf(e.target);
		
  if (tabIndex === 0) {
    tables[tabIndex].classList.add('tab_active');
	tables[tabIndex + 1].classList.remove('tab_active');
	tables[tabIndex + 2].classList.remove('tab_active');
	tabContent[tabIndex].classList.add('tab__content_active');
	tabContent[tabIndex + 1].classList.remove('tab__content_active');
	tabContent[tabIndex + 2].classList.remove('tab__content_active');
	}
		
  if (tabIndex === 1) {
	tables[tabIndex].classList.add('tab_active');
	tables[tabIndex - 1].classList.remove('tab_active');
	tables[tabIndex + 1].classList.remove('tab_active');
	tabContent[tabIndex].classList.add('tab__content_active');
	tabContent[tabIndex - 1].classList.remove('tab__content_active');
	tabContent[tabIndex + 1].classList.remove('tab__content_active');
  }
		
  if (tabIndex === 2) {
	tables[tabIndex].classList.add('tab_active');
	tables[tabIndex - 1].classList.remove('tab_active');
	tables[tabIndex - 2].classList.remove('tab_active');
	tabContent[tabIndex].classList.add('tab__content_active');
	tabContent[tabIndex - 1].classList.remove('tab__content_active');
	tabContent[tabIndex - 2].classList.remove('tab__content_active');
  }

};