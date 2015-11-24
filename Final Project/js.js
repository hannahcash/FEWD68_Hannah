$('.sbi_item').each(function(){
if( $(this).find('.sbi_photo img').attr('alt').toLowerCase().indexOf("#dinosaur") < 1 ) $(this).remove();
});