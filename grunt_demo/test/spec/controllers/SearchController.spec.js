'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('search.controller'));

  var SearchCtrl;
  var rootScope;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller) {
    rootScope = $rootScope;
    SearchCtrl = $controller('TideSearchController');
  }));

  describe('calling search with a query', function () {

    var CitySearchService;
    beforeEach(inject(function (_CitySearchService_) {
      CitySearchService = _CitySearchService_;
      spyOn(CitySearchService, 'findCityInfo');
    }));

    it('should call through to the CitySearchService', function () {
      SearchCtrl.search('San Francisco');
      expect(CitySearchService.findCityInfo).toHaveBeenCalledWith('San Francisco')
    });
  });


  describe('calling fetchCityWeather with a selectedCity', function () {

    var TideLookupService;

    beforeEach(inject(function (_TideLookupService_) {
      TideLookupService = _TideLookupService_;
      spyOn(TideLookupService, 'findTides')
    }));

    it('should call to the TideLookupService when the selectedCity is set', function () {
      SearchCtrl.selectedCity = {l: '/q/zwt:9999'};
      SearchCtrl.getTideInformation();
      expect(TideLookupService.findTides).toHaveBeenCalledWith(SearchCtrl.selectedCity)
    });
  });
});
