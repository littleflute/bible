function _listClass(){
 this.v = "v0.0.34";
 var ls = [];
 ls.push("https://littleflute.github.io/bible/ABibleExperience/NewTestament/list1.js");
 ls.push("https://littleflute.github.io/bible/ABibleExperience/NewTestament/list2.js");
 
 this.blr_List1 = function(b,d){  
  if(!d.view){
    d.tb = blo0.blDiv(d,d.id+"tb","tb:",blColor[3]);
    d.view = blo0.blDiv(d,d.id+"view","view:",blColor[1]);
    for(i in ls){
       var btn = blo0.blBtn(d.tb,d.tb.id+"btn_"+i,"list"+i,blGrey[0]);
       btn.onclick = function(_s,_i){
            return function(){
                d.view.innerHTML = _s;
                blo0.blScript("id_script_list"+_i,_s);
            }
       }(ls[i],i);
    }
  }
  _on_off_div(b,d);
 }
}
var l = new _listClass;

var s0 = '<div id="id_div_list1_toolbar">';
 s0 += '<a target="_blank" href="list1.js">' + v + '</a>-';
  s0 += '<a target="_blank" href="https://github.com/littleflute/bible/edit/master/ABibleExperience/NewTestament/list1.js">' + v + '*</a>';
  s0 += '</div>';

var listUI= blo0.blMDiv(document.body,"id_mdiv_list1",s0,150,200,500,800,blColor[2]); 
listUI.view = blo0.blDiv(listUI,listUI.id+"view","view:",blColor[6]);
listUI.tb = bl$('id_div_list_toolbar');
listUI.tb.b1 = blo0.blBtn(listUI.tb,listUI.tb.id+"b1","b1","grey"); 
listUI.tb.b1.onclick = function(){
    blo0.blShowObj2Div(listUI.view,l);
}
