sap.ui.define([], function () {
  "use strict";

  return {
    concatenateAirlineConnection: function (airlineId, connectionId) {
      return `${airlineId} ${connectionId}`;
    },
  };
});
