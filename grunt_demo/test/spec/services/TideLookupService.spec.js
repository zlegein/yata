'use strict';

describe('Service: TideLookupService', function () {

  // load the service's module
  beforeEach(module('tideLookup', 'tideLookupMocks'));

  // instantiate service
  var TideLookupService;
  var $httpBackend;
  var ApiKey;
  var $log;
  var $window;

  beforeEach(inject(function (_$httpBackend_, _$log_, _$window_,_TideLookupService_, _ApiKey_) {
    $httpBackend = _$httpBackend_;
    $log = _$log_;
    $window = _$window_;

    TideLookupService = _TideLookupService_;
    ApiKey = _ApiKey_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest()
  });

  describe('when service is first created', function () {
    it('the service should be defined after injection', function () {
      expect(TideLookupService).toBeDefined();
    });

    it('should have undefined conditions', function () {
      expect(TideLookupService.conditions).toBeUndefined();
      expect($httpBackend).toBeDefined()
    });
  });

  describe('when the findTides function is successfully called with a selected city', function () {

    var mockResponseData;

    beforeEach(inject(function (JSONPCallService) {

      spyOn($log, 'debug');

      var selectedCity = JSONPCallService.selectedCity;
      var expectedJSONPCall = JSONPCallService.expectedCall;
      mockResponseData = JSONPCallService.mockResponse;

      $httpBackend.expect('JSONP', expectedJSONPCall).respond(function () {
        return [200, mockResponseData]
      });

      TideLookupService.findTides(selectedCity);

      $httpBackend.flush();
    }));

    it('should set the tides on the service  ', function () {
      expect(TideLookupService.tide).toEqual({"foo": 2})
    });

    it('should log the results out', function () {
      expect($log.debug).toHaveBeenCalledWith('findTides', mockResponseData);
    });

  });

  describe('when the findTides functions fails warn the user', function () {
    beforeEach(inject(function (JSONPCallService) {
      spyOn($window, 'alert');

      $httpBackend.whenJSONP(JSONPCallService.expectedCall).respond(404);

      TideLookupService.findTides(JSONPCallService.selectedCity);

      $httpBackend.flush()

    }));

    it('should throw an alert', function () {
      expect($window.alert).toHaveBeenCalledWith('There was and issue fetching the tides');
    });
  });


});
