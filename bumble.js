var confirmBox = confirm('Start swiping right?');
var count = 1;
var like = function() {
    if (confirmBox) {
      document.querySelectorAll('.encounters-action--like')[0].click();
      console.log('Liked ' + count);						  
      count++;
    };
    setTimeout(like, 1000);
};
setTimeout(like, 1000);