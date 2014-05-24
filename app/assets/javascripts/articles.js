//= require validate

$(document).ready(function(){
	var ps = $(".whole_article").children();
	for(var i=0; i<ps.length; i++){
		p = ps.eq(i);
		if (p.css("background-color") == "rgb(255, 255, 255)"){
			p.css("background-color", "");
		}
		
	}

	var validator = new FormValidator('comment', [{
            name: 'comment[name]',
            display: 'required',    
            rules: 'required'
        }, {
            name: 'comment[email]',
            rules: 'required|valid_email'
        }, {
        	name: 'comment[content]',
        	rules: 'required'
        }], function(errors) {
            if (errors.length > 0) {
                console.info(errors);
                $('#new_comment span').remove();
                for(var err in errors)
                {
                    var input = $("#"+errors[err].id);
                    input.attr('value','').addClass('error').after('<span style="color:red">'+errors[err].message+'</span>');
                }
            }
        });
        validator.setMessage('required','请填必填项！');
        validator.setMessage('max_length','字符长度过长！');
        validator.setMessage('valid_email','邮箱格式错误！');
})