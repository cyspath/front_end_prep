$(document).ready(function () {
    $('#button').click(function () {
        var toAdd = $('input[name=checkListItem]').val()
        // item = '<div class="item">' + toAdd + '</div>'
        $('.list').append('<div class="item">' + toAdd + '</div>')

    })

    $(document).on('click', '.item', function () {
        this.remove()
    })

})


$(document).ready(function () {
    $('div.planet').click(function () {
        $(this).fadeOut('fast')
    })
})
