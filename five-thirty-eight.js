var page = require('webpage').create();
page.open('http://fivethirtyeight.blogs.nytimes.com/', function () {
  var data = page.evaluate(function() {
      var box = document.getElementById('eg2012-card-38-fivethirtyeight-ccol-top');
      var updated = box.querySelectorAll('.eg2012-updated-at');
      var obama = box.querySelectorAll('div.eg2012-nums div.eg2012-left');
      var romney = box.querySelectorAll('div.eg2012-nums div.eg2012-right');

      var text = '';

      text += 'President Nov. 6 Forecast\n'
      text += updated[0].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Electoral Vote\n';
      text += obama[0].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[0].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Chance of Winning\n';
      text += obama[1].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[1].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Popular Vote\n';
      text += obama[2].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[2].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += '\nPresident Now-cast\n'
      text += updated[1].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Electoral Vote\n';
      text += obama[3].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[3].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Chance of Winning\n';
      text += obama[4].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[4].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Popular Vote\n';
      text += obama[5].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[5].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += '\nSenate Nov. 6 Forecast\n'
      text += updated[2].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Number of Seats\n';
      text += obama[6].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[6].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '\n';

      text += 'Chance of Majority\n';
      text += obama[7].innerText.replace(/(\r\n|\n|\r)/gm,' ') + '| '
              + romney[7].innerText.replace(/(\r\n|\n|\r)/gm,' ');

      return text;
  });
  console.log(data);
  phantom.exit();
});
