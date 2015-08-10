(function () {

  function JSONPCallService (ApiKey) {
    var JSONPCallService = {};

    JSONPCallService.selectedCity = {l: "/q/zmw:94101.1.99999"};

    JSONPCallService.expectedCall = [
      'http://api.wunderground.com/api/',
      ApiKey.wu,
      '/tide',
      JSONPCallService.selectedCity.l,
      '.json?callback=JSON_CALLBACK'
    ].join('');

    JSONPCallService.mockResponse = {"tide":{"foo": 2} };
    return JSONPCallService
  }

  angular
    .module('tideLookupMocks', [])
    .value('ApiKey', {'wu': '1234'})
    .factory('JSONPCallService', JSONPCallService)

})();
