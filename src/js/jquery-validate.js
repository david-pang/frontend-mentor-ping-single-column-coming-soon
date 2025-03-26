$(function () {
    $("form").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            email: "Please provide a valid email address",
        },
        submitHandler: function (form, e) {
            form.submit();
        },
    });
});
