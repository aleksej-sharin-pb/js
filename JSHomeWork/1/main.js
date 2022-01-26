let test = "qwerty";

function likes(names) {
  var msg = '';
  if (typeof names !== "object")    msg = "parameter type should be an object"; //выбрасываем ошибку
  if (names.length === 0) msg = "no one likes this";       //выбрасываем ошибку
  console.log(names.length);

    if(names.lenght == 1) msg = '' + names[0] + ' likes this';
    if(names.length == 2) msg = '' + names[0] + ' and ' + names[1] + ' like this';
    if(names.length == 3) msg = '' + names[0] + ', '+ names[1] + ' and ' + names[2] + ' like this';
    if(names.length == 4) msg = '' + names[0] + ', '+ names[1] + ' and 2 others like this';
    console.log(msg);
    console.log(names.length);
  }

  likes([]);
  likes(['Peter']);
  likes(['Jacob', 'Alex']);
  likes(['Max', 'John', 'Mark']);
  likes(['Alex', 'Jacob', 'Mark', 'Max']);
  describe('example tests', function() {
    it('should return correct text', function() {
      Test.assertEquals(likes([]), 'no one likes this');
      Test.assertEquals(likes(['Peter']), 'Peter likes this');
      Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
      Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
      Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
  });