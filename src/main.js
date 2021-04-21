let web3;
web3 = new Web3(Web3.givenProvider);

let mimirSale;

$(document).ready(async function() {
  connect();

  $('.connect_button').click(connect);
  $('#claim_button').click(claim);
});

// Time remaining in sale
function getRemainingTime() {
  let startTime;
  let endTime;
  let timeRemaining;

  // Get start time
  mimirSale.methods
    .START()
    .call()
    .then(function(start) {
      startTime = start;
    });

  mimirSale.methods.EMD.call().then(function(end) {
    endTime = end;
  });

  timeRemaining = endTime - startTime;

  console.log(timeRemaining);
}

// Function to claim once sale is done
function claim() {
  mimirSale.methods
    .claim()
    .send()

    .on('transactionHash', function(hash) {
      console.log(hash);
    })

    .on('confirmation', function(confirmationNr) {
      console.log(confirmationNr);
    })

    .on('receipt', function(receipt) {
      console.log(receipt);
    });
}

// Function that displays eth until soft cap
function getEthUntilSoftCap() {
  let softCap;
  let ethRaised;

  mimirSale.methods.MINIMAL_PROVIDE_AMOUNT.call().then(function(min) {
    softCap = min / 1000000000000000000;
  });

  mimirSale.methods.totalProvided.call().then(function(ethBal) {
    ethRaised = ethBal / 1000000000000000000;
  });

  if (ethRaised < softCap) {
    console.log(softCap - ethRaised + ' ETH until soft cap is met');
  } else {
    console.log('Soft Cap met!' + ethRaised + ' ETH raised!');
  }
}

// Function that displays eth provided by user
function getUserProvidedEth() {
  mimirSale.methods
    .provided(accounts[0])
    .call()
    .then(function(ethProvided) {
      ethProvided = ethProvided / 1000000000000000000;

      console.log('You provided: ' + ethProvided + ' eth');
    });
}

function connected() {
  const accountsAbrv = accounts[0].slice(0, 7);
  $('.connect_button').text('CONNECTED TO: ' + accountsAbrv + '...');
}

async function connect() {
  try {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      console.log('window.eth');
      await ethereum.enable();
    } else if (window.web3) {
      wen3 = new Web3(window.web3.currentProvider);
      console.log('web3');
    }
  } catch (error) {
    // Catch any errors for any of the above operations.
    alert(`Failed to load web3, accounts, or contract. Check console for details.`);
    console.error(error);
  }

  accounts = await web3.eth.getAccounts();
  mimirSale = new web3.eth.Contract(MimirSaleABI, '0xb72027693a5B717B9e28Ea5E12eC59b67c944Df7', {
    from: accounts[0]
  });

  console.log(accounts[0]);

  getRemainingTime();
  getEthUntilSoftCap();
  getUserProvidedEth();

  connected();
}
