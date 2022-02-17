window.onscroll = function() {FtingInstlBtn()};

function ReadMore() {
	var btnTxt = document.getElementById('readMoreCollapse');
	var moreInfo = document.getElementById('moreInfo');
	if (btnTxt.innerHTML == "READ MORE") {
		moreInfo.style.display = "block";
		btnTxt.innerHTML = "COLLAPSE";
	} else if (btnTxt.innerHTML == "COLLAPSE") {
		moreInfo.style.display = "none";
		btnTxt.innerHTML = "READ MORE";
	}
}

function FtingInstlBtn() {
	var btn = document.getElementById('ftingInstlBtn');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}