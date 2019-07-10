var Splitter = artifacts.require("./Splitter");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Splitter);
};