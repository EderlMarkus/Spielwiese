myClass = {
  objPlaceHolder: { foo: 'bar' },

  checkIfAllEntriesAreValid: function (data, checks) {
    for (let index = 0; index < data.length; index++) {
      var element = data[index];
      if (!checks(element)) {
        return false;
      }
    }
    return true;
  },

  myFunction: function (data) {
    //Input Error Validation
    checks = function (obj) {
      switch (true) {
        case typeof obj.kundenNummer === 'undefined':
          console.log('Error: kundenNummer is not defined');
          return false;
        case typeof obj.info === 'undefined':
          console.log('Error: info is not defined');
          return false;
        case obj.info !== 'Info':
          console.log('Error: Info has wrong Value');
          return false;
        case obj.mehrInfo !== 'MehrInfo':
          console.log('Error: mehrInfo has wrong Value');
          return false;
        default:
          return true;
      }
    };

    var inputError = !this.checkIfAllEntriesAreValid(data, checks);

    console.log('Error is ' + inputError);
  },
};
