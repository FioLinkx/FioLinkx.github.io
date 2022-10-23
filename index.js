jQuery(() => {
    $('.onglet').on('click', function () {
        $('.onglet').removeClass('!bg-gray-700')
        $(this).addClass('!bg-gray-700')
        $('.content').hide();
        $('.cache').hide();
        $('#content-' + $(this).attr('id')).show();
        $('#cache-' + $(this).attr('id')).show();


        $('#content-' + $(this).attr('id')).children('.group-image').each(function () {
            GroupImageOrganize("#" + $(this).attr('id'))
        });
    });


});


function groupImageAnimation(groupId) {
    if ($(groupId).is(":hidden")) return;
    const first = $(groupId).children().toArray()[0];
    $($(groupId).children().toArray()[0]).remove()
    $(groupId).append(first)

    GroupImageOrganize(groupId);
}

function GroupImageOrganize(groupId) {
    const children = $(groupId).children();
    const hClass = $(groupId).attr('class').split(' ').filter(e => e.startsWith('h-'))[0];

    if (children.length > 2) {
        children.each(function (i, val) {
            $(val).removeClass();
            $(val).children().removeClass();
            $(val).addClass('flex items-center ' + hClass);

            switch (i) {
                case 0:
                    $(val).addClass('opacity-50 p-12 absolute top-1/2 left-1/2 transform -translate-x-full -translate-y-1/2');
                    $(val).show();
                    break;
                case 1:
                    $(val).addClass('z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2')
                    $(val).children().addClass('border rounded')
                    $(val).show();
                    break;
                case 2:
                    $(val).addClass('opacity-50 p-12 absolute top-1/2 left-1/2 transform -translate-y-1/2');
                    $(val).show();
                    break;
                default:
                    $(val).hide()
                    break;
            }
        });
    }

    setTimeout(() => groupImageAnimation(groupId), 5000);
}