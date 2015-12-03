﻿// JavaScript source code

/**
 * GraphData.js
 * @author Andrew
 */

'use strict';

define([], function () {
    try {

        var Contract = function Contract() 
        {};

        Contract.expect = function(condition, msg){
            if (!condition) {
                throw new Error(Contract.getMessage("The required condition was not met", msg));
            }
        };
    
        // These methods are used for preconditions
        Contract.expectType = function (arg, type, msg){
            var argType = typeof arg;
            if (argType !== type) {
                msg = Contract.getMessage("The argument was not of expected type: '" + type + "' - was '" + argType + "'", msg);
                throw new Error(msg);
            }
        };

        Contract.expectNumber = function(arg, msg){
            Contract.expectType(arg, "number", msg);
        };

        Contract.expectString = function (arg, msg){
            Contract.expectType(arg, "string", msg);
        };

        Contract.expectObject = function(arg, msg){
            Contract.expectType(arg, "object", msg);
        };

        Contract.expectRegExp = function (arg, msg){
            Contract.instanceOf(arg, RegExp, msg);
        };
    
        Contract.expectValue = function (arg, values, msg){
            if (!values instanceof Array) {
                values = [values];
            }
            var i = values.length;
            while (i--) {
                if (arg === values[i]) {
                    return;
                }
            }
            throw new Error(getMessage("argument has an invalid value, '" + arg + "' not in '" + values.join() + "'", msg));
        };
    
        Contract.expectWhen = function(precondition, condition, msg){
            if (precondition) {
                Contract.expect(condition, msg);
            }
        };

        Contract.ofType = function (obj, type){
            return (typeof obj === type);
        };

        Contract.instanceOf = function (arg, type, msg){
            if (!(arg instanceof type)) {
                msg = Contract.getMessage("The argument was not an instance of type: " + type.name, msg);
                throw new Error(msg);
            }
        };

        Contract.getMessage = function(base, msg){
            return base + ((typeof msg === "undefined") ? "." : (" - '" + msg + "'."));
        };

        return Contract;
    }
    catch (e) {
        alert('contract.js: ' + e.message);
    }

});
