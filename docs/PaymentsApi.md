# Payments.PaymentsApi

All URIs are relative to *https://api.dev.neem.io/neem*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initiateWalletPayment**](PaymentsApi.md#initiateWalletPayment) | **POST** /api/v1/wallets/payment-initiate/{walletId} | Make Payments
[**walletBillInquiry**](PaymentsApi.md#walletBillInquiry) | **GET** /api/v1/wallets/bill/inquiry/{walletId} | Bill Inquiry
[**walletBillPayment**](PaymentsApi.md#walletBillPayment) | **POST** /api/v1/wallets/bill/payment/{walletId} | Bill Payment
[**walletPaymentInquiry**](PaymentsApi.md#walletPaymentInquiry) | **GET** /api/v1/wallets/payment-inquiry/{walletId} | Payment Inquiry



## initiateWalletPayment

> Object initiateWalletPayment(walletId, opts)

Make Payments

### Example

```javascript
import Payments from 'payments';
let defaultClient = Payments.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Payments.PaymentsApi();
let walletId = 56; // Number | 
let opts = {
  'xNeemId': 1234, // String | 
  'xNeemPartnerId': 1234, // Number | 
  'body': {key: null} // Object | 
};
apiInstance.initiateWalletPayment(walletId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **Number**|  | 
 **xNeemId** | **String**|  | [optional] 
 **xNeemPartnerId** | **Number**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletBillInquiry

> Object walletBillInquiry(walletId, opts)

Bill Inquiry

### Example

```javascript
import Payments from 'payments';
let defaultClient = Payments.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Payments.PaymentsApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemId': 1234, // String | 
  'xNeemPartnerId': 1234, // Number | 
  'endToEndIdentification': "endToEndIdentification_example", // String | 
  'productId': "productId_example", // String | 
  'consumerNumber': "consumerNumber_example" // String | 
};
apiInstance.walletBillInquiry(walletId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**|  | 
 **xNeemId** | **String**|  | [optional] 
 **xNeemPartnerId** | **Number**|  | [optional] 
 **endToEndIdentification** | **String**|  | [optional] 
 **productId** | **String**|  | [optional] 
 **consumerNumber** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletBillPayment

> Object walletBillPayment(walletId, opts)

Bill Payment

### Example

```javascript
import Payments from 'payments';
let defaultClient = Payments.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Payments.PaymentsApi();
let walletId = 56; // Number | 
let opts = {
  'xNeemId': 1234, // String | 
  'xNeemPartnerId': 1234, // Number | 
  'body': {key: null} // Object | 
};
apiInstance.walletBillPayment(walletId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **Number**|  | 
 **xNeemId** | **String**|  | [optional] 
 **xNeemPartnerId** | **Number**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletPaymentInquiry

> Object walletPaymentInquiry(walletId, opts)

Payment Inquiry

### Example

```javascript
import Payments from 'payments';
let defaultClient = Payments.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth
let oAuth = defaultClient.authentications['oAuth'];
oAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Payments.PaymentsApi();
let walletId = "walletId_example"; // String | 
let opts = {
  'xNeemId': 1234, // String | 
  'xNeemPartnerId': 1234, // Number | 
  'endToEndIdentification': "endToEndIdentification_example", // String | 
  'paymentScheme': "paymentScheme_example", // String | 
  'amount': "amount_example", // String | 
  'currency': "currency_example", // String | 
  'creditorIdentification': "creditorIdentification_example", // String | 
  'creditorName': "creditorName_example", // String | 
  'creditorInstitutionIdentification': "creditorInstitutionIdentification_example", // String | 
  'creditorSecondaryIdentification': "creditorSecondaryIdentification_example", // String | 
  'extendedProperties': [null] // [Object] | 
};
apiInstance.walletPaymentInquiry(walletId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**|  | 
 **xNeemId** | **String**|  | [optional] 
 **xNeemPartnerId** | **Number**|  | [optional] 
 **endToEndIdentification** | **String**|  | [optional] 
 **paymentScheme** | **String**|  | [optional] 
 **amount** | **String**|  | [optional] 
 **currency** | **String**|  | [optional] 
 **creditorIdentification** | **String**|  | [optional] 
 **creditorName** | **String**|  | [optional] 
 **creditorInstitutionIdentification** | **String**|  | [optional] 
 **creditorSecondaryIdentification** | **String**|  | [optional] 
 **extendedProperties** | [**[Object]**](Object.md)|  | [optional] 

### Return type

**Object**

### Authorization

[oAuth](../README.md#oAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

