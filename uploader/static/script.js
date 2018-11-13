function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageFile").change(function () {
    readURL(this);
});

$('#detect-btn').click(function () {
    var form_data = new FormData();
    form_data.append('imgfile', $('#imageFile').prop('files')[0]);
    $.ajax({
        type: 'POST',
        url: '/uploadajax',
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
            $("#predict_result").text(data.predict_result);
        },
    });
});
