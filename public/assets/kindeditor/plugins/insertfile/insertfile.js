/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("insertfile",function(e){var t=this,n="insertfile",i=e.undef(t.allowFileUpload,!0),r=e.undef(t.allowFileManager,!1),a=e.undef(t.formatUploadUrl,!0),o=e.undef(t.uploadJson,t.basePath+"php/upload_json.php"),s=e.undef(t.extraFileUploadParams,{}),l=e.undef(t.filePostName,"imgFile"),c=t.lang(n+".");t.plugin.fileDialog=function(u){var d=e.undef(u.fileUrl,"http://"),f=e.undef(u.fileTitle,""),h=u.clickFn,p=['<div style="padding:20px;">','<div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+c.url+"</label>",'<input type="text" id="keUrl" name="url" class="ke-input-text" style="width:160px;" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+c.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+c.viewServer+'" />',"</span>","</div>",'<div class="ke-dialog-row">','<label for="keTitle" style="width:60px;">'+c.title+"</label>",'<input type="text" id="keTitle" class="ke-input-text" name="title" value="" style="width:160px;" /></div>',"</div>","</form>","</div>"].join(""),m=t.createDialog({name:n,width:450,title:t.lang(n),body:p,yesBtn:{name:t.lang("yes"),click:function(){var n=e.trim(v.val()),i=b.val();return"http://"==n||e.invalidUrl(n)?(alert(t.lang("invalidUrl")),v[0].focus(),void 0):(""===e.trim(i)&&(i=n),h.call(t,n,i),void 0)}}}),g=m.div,v=e('[name="url"]',g),y=e('[name="viewServer"]',g),b=e('[name="title"]',g);if(i){var _=e.uploadbutton({button:e(".ke-upload-button",g)[0],fieldName:l,url:e.addParam(o,"dir=file"),extraParams:s,afterUpload:function(i){if(m.hideLoading(),0===i.error){var r=i.url;a&&(r=e.formatUrl(r,"absolute")),v.val(r),t.afterUpload&&t.afterUpload.call(t,r,i,n),alert(t.lang("uploadSuccess"))}else alert(i.message)},afterError:function(e){m.hideLoading(),t.errorDialog(e)}});_.fileBox.change(function(){m.showLoading(t.lang("uploadLoading")),_.submit()})}else e(".ke-upload-button",g).hide();r?y.click(function(){t.loadPlugin("filemanager",function(){t.plugin.filemanagerDialog({viewType:"LIST",dirName:"file",clickFn:function(n){t.dialogs.length>1&&(e('[name="url"]',g).val(n),t.afterSelectFile&&t.afterSelectFile.call(t,n),t.hideDialog())}})})}):y.hide(),v.val(d),b.val(f),v[0].focus(),v[0].select()},t.clickToolbar(n,function(){t.plugin.fileDialog({clickFn:function(e,n){var i='<a class="ke-insertfile" href="'+e+'" data-ke-src="'+e+'" target="_blank">'+n+"</a>";t.insertHtml(i).hideDialog().focus()}})})});