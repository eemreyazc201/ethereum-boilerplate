// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract main {
    constructor () {}

    function sayHello () public view returns (address) {
        return msg.sender;
    }
}    