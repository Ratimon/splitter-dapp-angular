pragma solidity ^0.5.0;

contract Splitter {
    mapping (address=>uint) balances;
    enum People {Alice, Bob, Carol}
    // event  LogSplit(address indexed sender)
    // Client-side will likely filter by these `indexed` fields.
    event LogSplit(address indexed sender, address indexed bob, address indexed carol, uint amount);
    event LogWithdrawn(address indexed who, uint amount);
    
    modifier validAddress(address paramAddress){
        require(paramAddress !=  address(0));
        _;
    }
    
    constructor() public {
        
    }
    
    function split(address bob, address carol)
        payable
        public
        validAddress(bob)
        validAddress(carol) {
            uint half = msg.value / 2;
            require (half>0);
            balances[bob] += half;
            balances[carol] += msg.value - half;
            emit LogSplit(msg.sender, bob, carol, msg.value);
    }
    
    function withdraw() public {
        uint amount = balances[msg.sender];
        require(amount>0);
        balances[msg.sender]=0;
        emit LogWithdrawn(msg.sender, amount);
        msg.sender.transfer(amount);
    }
    
    
}