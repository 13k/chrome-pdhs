
var sounds = document.getElementById('sounds');
var table = sounds.getElementsByTagName('table')[0];
var applied = false;

for (var i=0; i < table.rows.length; i++)
{
	var row = table.rows[i];
	var cell = row.cells[0];
	
	if (cell.tagName.toLowerCase() != 'td')
		continue;
	
	var links = cell.getElementsByTagName('a');
	
	if (links.length < 1)
		continue;

	for (var j = 0; j < links.length; j++) {
		if (links[j].getAttribute('class') == 'pdhs_ext_dllink') {
			applied = true;
			break;
		}
	}

	if (applied)
		break;

	var link = links[0];
	var link_p = link.parentNode;
	var id = link.id;
	var split = id.split('-');
	var sid = split[0].substr(9);
	var hid = split[1];

	var dl_link = document.createElement("a");
	var img = document.createElement("img");
	
	img.src = "http://www.playdota.com/img/site/down.gif";

	dl_link.href = "http://playdota.com/img/sounds/" + hid + "/" + sid + ".mp3";
	dl_link.setAttribute('class', 'pdhs_ext_dllink');
	dl_link.innerHTML = "&nbsp;";
	dl_link.appendChild(img);

	link_p.appendChild(dl_link);
}
