var HHTagColor = ["blue","light-blue", "red","orange", "green", "purple"]
var tagRegex = /.*[\[\[]+[A-Za-z0-9-_]+[\]\]]+.*/g;

$( document ).ready(function() {
        $( ".userContent" ).each(function( index ) {
            var content = $( this ).html();
            var taggifiedContent = content.parseHHTags();
            $(this).html(taggifiedContent);
        });
});

String.prototype.parseHHTags = function() {
	return this.replace(tagRegex, function(t) {        
            var tagColor = HHTagColor[Math.floor(Math.random() * HHTagColor.length)];
        
            var text = t.replace(/\[\[/g,"<span class=\"hh-tag "+ tagColor + "\">").replace(/\]\]/g,"</span>")
            return text;
	});
};

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length == 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; 
  }
  return hash;
};