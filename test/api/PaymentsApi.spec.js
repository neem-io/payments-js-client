/**
 * Payments
 * Enable your customers to make intrabank or IBFT payments through our payment APIs.
 *
 * The version of the OpenAPI document: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Payments);
  }
}(this, function(expect, Payments) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Payments.PaymentsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentsApi', function() {
    describe('initiateWalletPayment', function() {
      it('should call initiateWalletPayment successfully', function(done) {
        //uncomment below and update the code to test initiateWalletPayment
        //instance.initiateWalletPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletBillInquiry', function() {
      it('should call walletBillInquiry successfully', function(done) {
        //uncomment below and update the code to test walletBillInquiry
        //instance.walletBillInquiry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletBillPayment', function() {
      it('should call walletBillPayment successfully', function(done) {
        //uncomment below and update the code to test walletBillPayment
        //instance.walletBillPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletPaymentInquiry', function() {
      it('should call walletPaymentInquiry successfully', function(done) {
        //uncomment below and update the code to test walletPaymentInquiry
        //instance.walletPaymentInquiry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
