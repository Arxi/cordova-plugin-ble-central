

if (global.require === undefined) {
    console.error(
      "Electron Node.js integration is disabled, you can not use cordova-plugin-ble-central without it\n" +
      "Check docs how to enable Node.js integration: https://cordova.apache.org/docs/en/latest/guide/platforms/electron/#quick-start"
    );
    return;
}

console.log("In electron version of cordova plugin");




function notSupported() {
    console.log('BLE running on Electron!');
}

module.exports = {
    scan: function(services, seconds, success, failure) {
        notSupported();
        if (failure) failure();
    },
    startScan: function(services, success, failure) {
        notSupported();
        if (failure) failure();
    },
    stopScan: function(success, failure) {
        notSupported();
        if (failure) failure();
    },
    startScanWithOptions: function(services, options, success, failure) {
        notSupported();
        if (failure) failure();
    },
    connect: function(device_id, connectSuccess, connectFailure) {
        notSupported();
        if (connectFailure) connectFailure();
    },
    disconnect: function(device_id, connectSuccess, connectFailure) {
        notSupported();
        if (connectFailure) connectFailure();
    },
    read: function(device_id, service_uuid, characteristic_uuid, success, failure) {
        notSupported();
        if (failure) failure();
    },
    readRSSI: function(device_id, success, failure) {
        notSupported();
        if (failure) failure();
    },
    write: function(device_id, service_uuid, characteristic_uuid, data, success, failure) {
        notSupported();
        if (failure) failure();
    },
    writeWithoutResponse: function(device_id, service_uuid, characteristic_uuid, data, success, failure) {
        notSupported();
        if (failure) failure();
    },
    startNotification: function(device_id, service_uuid, characteristic_uuid, success, failure) {
        notSupported();
        if (failure) failure();
    },
    stopNotifcation: function(device_id, service_uuid, characteristic_uuid, success, failure) {
        notSupported();
        if (failure) failure();
    },
    isEnabled: function(success, failure) {
        notSupported();
        if (failure) failure();
    },
    isConnected: function(device_id, success, failure) {
        notSupported();
        if (failure) failure();
    },
    showBluetoothSettings: function(success, failure) {
        notSupported();
        if (failure) failure();
    },
    enable: function(success, failure) {
        notSupported();
        if (failure) failure();
    },
    startStateNotifications: function(success, failure) {
      notSupported();
      if (failure) failure();
    },
    stopStateNotifications: function(success, failure) {
      notSupported();
      if (failure) failure();
    }
};
