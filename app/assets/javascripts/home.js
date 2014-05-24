//= require validate

$(document).ready(function(){
    var validator = new FormValidator('leave_message', [{
            name: 'leave_message[name]',
            display: 'required',    
            rules: 'required'
        }, {
            name: 'leave_message[email]',
            rules: 'required|valid_email'
        }, {
            name: 'leave_message[comment]',
            rules: 'required'
        }], function(errors) {
            if (errors.length > 0) {
                console.info(errors);
                $('#new_leave_message span').remove();
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