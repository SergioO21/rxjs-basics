import { fromEvent, map } from "rxjs";

const text = document.createElement("div");
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu elementum augue. Praesent ac lobortis enim. Nulla non diam eu metus posuere vestibulum faucibus at mi. Quisque nec mauris interdum, molestie quam ac, accumsan elit. Pellentesque ullamcorper tincidunt porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam molestie, orci ut blandit semper, dui enim aliquet quam, ut facilisis lectus lorem condimentum lectus. Nulla justo orci, porta eget luctus commodo, condimentum id lectus. Duis elementum iaculis tellus et faucibus. Sed bibendum ultrices odio, eget faucibus libero congue nec. Maecenas lacus neque, bibendum a sapien maximus, tempus dignissim urna. Aenean ipsum leo, pharetra sit amet fermentum ut, volutpat hendrerit neque.
<br/><br/>
Integer vulputate nisl ac euismod venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla lobortis ex et fringilla faucibus. Vivamus blandit lectus tincidunt, elementum tellus id, fringilla ante. Vivamus sodales ex vel lobortis sagittis. Vestibulum ac venenatis justo, non tempor metus. Aliquam fermentum lobortis posuere. Fusce tristique rutrum quam, ut egestas nisl venenatis eget. Curabitur aliquet at ligula nec tincidunt. Maecenas ac facilisis ipsum, non pretium mauris. Nam pharetra urna vitae mi porttitor, ut mollis risus blandit. Quisque pretium scelerisque dignissim. Etiam at nisl vehicula augue volutpat accumsan. Integer vel lectus aliquam, commodo lorem euismod, elementum risus. Aenean elementum ex sed imperdiet consectetur. Ut non blandit ex, id dapibus magna.
<br/><br/>
Nam fringilla semper purus sit amet semper. Curabitur congue nibh eget pretium sagittis. Curabitur ultricies consequat nulla eget auctor. Nullam accumsan, mauris aliquet sollicitudin tincidunt, justo nulla malesuada dui, ac blandit arcu tellus sit amet est. Duis velit sem, placerat non porttitor in, posuere vel dolor. Donec quis nunc arcu. Integer consequat libero eu ex ultricies, id gravida enim maximus. Donec ultricies lacus ipsum, aliquet sodales diam dictum laoreet. Curabitur a aliquam nunc, sit amet faucibus ante. Vestibulum porta odio vel sagittis sodales. Cras faucibus mi eu augue tempus, quis maximus risus lacinia. Praesent ullamcorper placerat blandit. Duis non ante a mauris fermentum commodo in ac libero.
<br/><br/>
Duis vehicula, dolor nec accumsan aliquet, mi diam sollicitudin mi, eget pharetra mauris arcu a tortor. Nulla facilisi. Donec lacinia id quam nec dignissim. Integer tincidunt dictum odio sit amet vehicula. Etiam in mauris a sem finibus aliquam non vitae odio. Nunc mauris neque, tristique eu sem vel, laoreet fringilla nisi. Donec et placerat libero. Duis eu lectus tellus. Vestibulum pulvinar sapien eu magna pellentesque, ut tincidunt eros ullamcorper. Quisque non molestie erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Pellentesque sagittis, nunc sed laoreet molestie, nulla lorem iaculis tellus, vitae maximus nunc leo vel mi. Aenean nec vehicula ipsum, sollicitudin ornare est. Mauris et nunc vel mi interdum facilisis vitae eleifend sapien. Vivamus eget semper ipsum. Nulla et sapien vitae dui posuere maximus nec et magna. Morbi imperdiet diam quis mi luctus auctor. Etiam et est laoreet, dapibus nisl sed, bibendum magna. Donec ultrices massa ut ligula fermentum condimentum. Praesent quis dui at magna iaculis vehicula. Nulla diam erat, vehicula vitae massa at, cursus egestas risus.
<br/><br/>
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius lorem ex. Aenean vulputate erat in ornare interdum. Suspendisse potenti. Morbi accumsan, quam vehicula pretium semper, dui dui gravida quam, at fringilla enim metus vitae enim. Nullam nec arcu eget justo venenatis malesuada sed non leo. Sed sed magna sapien. Nunc vitae lorem ultricies nulla gravida bibendum non vel ipsum.
<br/><br/>
Vestibulum fermentum tempor lacus. Sed congue scelerisque auctor. Curabitur sodales risus ut luctus pulvinar. Nullam congue efficitur sem, sit amet volutpat enim semper nec. In justo risus, iaculis et enim non, elementum iaculis ante. Nulla facilisi. Duis sed neque metus. Integer placerat diam lacus, et tempor lectus tempus sit amet. Vestibulum molestie lectus turpis, id aliquet tortor dictum ut. Quisque tempus id diam sit amet dictum. Quisque in sodales ipsum. Pellentesque non diam magna. Cras eleifend, velit at vehicula porttitor, ante erat porta lectus, vitae accumsan libero nibh id elit. Nullam vel tempus felis.
<br/><br/>
Phasellus quis metus non leo pharetra sagittis at vel nunc. Suspendisse rhoncus, nulla quis facilisis gravida, neque ligula luctus orci, ut iaculis libero neque sollicitudin velit. Fusce elementum nibh libero, et sollicitudin massa sollicitudin vel. Maecenas auctor mauris eget varius interdum. Suspendisse malesuada, sapien in dapibus convallis, dui nisi maximus justo, sed dapibus orci dolor eget velit. Phasellus pulvinar turpis ut elit vestibulum bibendum. Nullam dapibus purus magna, tempus efficitur sapien aliquam vitae. Proin pulvinar leo quam, ut blandit neque volutpat a. Morbi vehicula, felis eget iaculis vehicula, tellus ex commodo dolor, eget vestibulum ligula diam ac eros.
<br/><br/>
Vivamus porta, dui varius ultrices mollis, quam lacus rhoncus augue, ac ullamcorper erat risus ut nisl. Donec vel sapien quis ante elementum tincidunt eget semper magna. Donec ut dui urna. Pellentesque diam arcu, pellentesque sed ipsum vel, aliquam pellentesque massa. Aliquam viverra mauris rutrum elit dictum, in hendrerit leo vehicula. Cras mauris tortor, consequat a facilisis a, feugiat et nisl. Maecenas vel faucibus turpis. Fusce pulvinar massa lectus, sed rhoncus ex tempus at.
<br/><br/>
Aliquam porta, justo id tempor viverra, ligula diam rutrum eros, id auctor risus tellus in ipsum. Maecenas eget imperdiet nibh, sit amet consequat lacus. Donec gravida ex nec mi aliquet tincidunt quis quis ligula. Quisque tortor leo, molestie quis sem et, laoreet condimentum ipsum. Integer vel lacinia sem. Maecenas rutrum sem at ex sodales, a feugiat odio tempor. Vestibulum tristique fringilla velit, eget dapibus dolor lobortis nec. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse porta hendrerit molestie. Cras scelerisque congue tincidunt. Phasellus bibendum vitae dolor at venenatis. Proin id dapibus elit. Nulla sed finibus urna, a blandit urna. Duis ut enim eros.
`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const calculateScrollPercentage = (event) => {
	const { clientHeight, scrollHeight, scrollTop } =
		event.target.documentElement;

	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(map(calculateScrollPercentage));

progress$.subscribe((percentage) => {
	progressBar.style.width = `${percentage}%`;
});
