/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("media",function(e){var t=this,n="media",i=t.lang(n+"."),r=e.undef(t.allowMediaUpload,!0),a=e.undef(t.allowFileManager,!1),o=e.undef(t.formatUploadUrl,!0),s=e.undef(t.extraFileUploadParams,{}),l=e.undef(t.filePostName,"imgFile"),c=e.undef(t.uploadJson,t.basePath+"php/upload_json.php");t.plugin.media={edit:function(){var u=['<div style="padding:20px;">','<div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+i.url+"</label>",'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+i.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+i.viewServer+'" />',"</span>","</div>",'<div class="ke-dialog-row">','<label for="keWidth" style="width:60px;">'+i.width+"</label>",'<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" />',"</div>",'<div class="ke-dialog-row">','<label for="keHeight" style="width:60px;">'+i.height+"</label>",'<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" />',"</div>",'<div class="ke-dialog-row">','<label for="keAutostart">'+i.autostart+"</label>",'<input type="checkbox" id="keAutostart" name="autostart" value="" /> ',"</div>","</div>"].join(""),d=t.createDialog({name:n,width:450,height:230,title:t.lang(n),body:u,yesBtn:{name:t.lang("yes"),click:function(){var n=e.trim(h.val()),i=m.val(),r=g.val();if("http://"==n||e.invalidUrl(n))return alert(t.lang("invalidUrl")),h[0].focus(),void 0;if(!/^\d*$/.test(i))return alert(t.lang("invalidWidth")),m[0].focus(),void 0;if(!/^\d*$/.test(r))return alert(t.lang("invalidHeight")),g[0].focus(),void 0;var a=e.mediaImg(t.themesPath+"common/blank.gif",{src:n,type:e.mediaType(n),width:i,height:r,autostart:v[0].checked?"true":"false",loop:"true"});t.insertHtml(a).hideDialog().focus()}}}),f=d.div,h=e('[name="url"]',f),p=e('[name="viewServer"]',f),m=e('[name="width"]',f),g=e('[name="height"]',f),v=e('[name="autostart"]',f);if(h.val("http://"),r){var y=e.uploadbutton({button:e(".ke-upload-button",f)[0],fieldName:l,extraParams:s,url:e.addParam(c,"dir=media"),afterUpload:function(i){if(d.hideLoading(),0===i.error){var r=i.url;o&&(r=e.formatUrl(r,"absolute")),h.val(r),t.afterUpload&&t.afterUpload.call(t,r,i,n),alert(t.lang("uploadSuccess"))}else alert(i.message)},afterError:function(e){d.hideLoading(),t.errorDialog(e)}});y.fileBox.change(function(){d.showLoading(t.lang("uploadLoading")),y.submit()})}else e(".ke-upload-button",f).hide();a?p.click(function(){t.loadPlugin("filemanager",function(){t.plugin.filemanagerDialog({viewType:"LIST",dirName:"media",clickFn:function(n){t.dialogs.length>1&&(e('[name="url"]',f).val(n),t.afterSelectFile&&t.afterSelectFile.call(t,n),t.hideDialog())}})})}):p.hide();var b=t.plugin.getSelectedMedia();if(b){var _=e.mediaAttrs(b.attr("data-ke-tag"));h.val(_.src),m.val(e.removeUnit(b.css("width"))||_.width||0),g.val(e.removeUnit(b.css("height"))||_.height||0),v[0].checked="true"===_.autostart}h[0].focus(),h[0].select()},"delete":function(){t.plugin.getSelectedMedia().remove(),t.addBookmark()}},t.clickToolbar(n,t.plugin.media.edit)});