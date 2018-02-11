pragma solidity ^0.4.19;

// ----------------------------------------------------------------------------
// BokkyPooBah's Ethereum Workshop #31
//
// Enjoy. (c) BokkyPooBah / Bok Consulting Pty Ltd 2018. The MIT Licence.
// ----------------------------------------------------------------------------

contract BasicVariables {

    string public stringVariable = "original value";

    // Private variables cannot be viewed from outside
    string privateStringVariable;

    // Both variables below are of the same type
    uint public unsignedIntegerVariable;
    uint256 public unsignedInteger256Variable;

    // uint8, uint16, uint24, ..., uint256 
    uint8 public unsignedInteger8Variable;

    // Other types
    bool public booleanVariable = true;

    // Constructor has the same name as the contract
    function BasicVariables() public {
        stringVariable = "Hello, World!";
        privateStringVariable = "you can't see me";
        unsignedIntegerVariable = 1;
        unsignedInteger256Variable = 1;
        unsignedInteger8Variable = 1;
    }

    function setStringVariable(string newValue) public {
        stringVariable = newValue;
    }

    function getStringVariable() public view returns (string) {
        return stringVariable;
    }

    function getStringVariable1() public view returns (string returnValue) {
        returnValue = stringVariable;
    }

    function underflowIntegerVariables() public {
        unsignedIntegerVariable = unsignedIntegerVariable - 2;
        unsignedInteger256Variable = unsignedInteger256Variable - 2;
        unsignedInteger8Variable = unsignedInteger8Variable - 2;
    }

    function overflowIntegerVariables() public {
        unsignedIntegerVariable = unsignedIntegerVariable + 2;
        unsignedInteger256Variable = unsignedInteger256Variable + 2;
        unsignedInteger8Variable = unsignedInteger8Variable + 2;
    }

    function toggleBooleanVariable() public {
        booleanVariable = !booleanVariable;
    }
    
    function reset() public {
        stringVariable = "Hello, World!";
        privateStringVariable = "you can't see me";
        unsignedIntegerVariable = 1;
        unsignedInteger256Variable = 1;
        unsignedInteger8Variable = 1;
    }
}