// Helper Functions for Local Storage Management

// Function to get coin balance from local storage
function getCoinBalance() {
    const balance = localStorage.getItem("coinBalance");
    return balance ? parseInt(balance) : 0; // Return balance or default to 0
}

// Function to update coin balance and save to local storage
function updateCoinBalance(amount) {
    let currentBalance = getCoinBalance(); // Get current balance
    currentBalance += amount; // Add the amount
    localStorage.setItem("coinBalance", currentBalance); // Save to local storage
    document.getElementById("coinBalance").textContent = currentBalance; // Update UI
}

// Function to reset coin balance
function resetCoinBalance() {
    localStorage.setItem("coinBalance", 0); // Reset balance to 0
    document.getElementById("coinBalance").textContent = 0; // Update UI
}

// Function to clear all local storage data
function clearLocalStorage() {
    localStorage.clear(); // Clear all local storage data
    document.getElementById("coinBalance").textContent = 0; // Update UI
}

// Initialize the coin balance on page load
document.addEventListener("DOMContentLoaded", () => {
    const initialBalance = getCoinBalance(); // Get balance from local storage
    document.getElementById("coinBalance").textContent = initialBalance; // Update UI
});

// Mission Button Logic Example
document.getElementById('telegramButton').addEventListener('click', function() {
    const button = this;
    button.disabled = true;
    button.textContent = "Loading...";
    setTimeout(function() {
        button.textContent = "Completed";
        updateCoinBalance(300); // Add 300 coins
    }, 5000);
});

document.getElementById('youtubeButton').addEventListener('click', function() {
    const button = this;
    button.disabled = true;
    button.textContent = "Loading...";
    setTimeout(function() {
        button.textContent = "Completed";
        updateCoinBalance(300); // Add 300 coins
    }, 5000);
});
document.getElementById('telegramButton').addEventListener('click', function() {
    const button = this;
    button.disabled = true;
    button.textContent = "Loading...";
    setTimeout(function() {
        button.textContent = "Completed";
        document.getElementById("coinBalance").textContent =function fetchCoinBalance() {
    fetch('/api/getBalance') // Example API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('coinBalance').textContent = data.balance;
        })
        .catch(console.error);
}
setInterval(fetchCoinBalance, 10000); // Refresh every 10 secondsfunction toggleTheme() {
    document.body.classList.toggle('light-mode');
}function toggleTheme() {
    document.body.classList.toggle('light-mode');
}function handleCredentialResponse(response) {
    const userInfo = jwt_decode(response.credential);
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential }),
    }).then(() => {
        // Proceed with user session
    }).catch(console.error);
}function syncLocalData() {
    const data = {
        coinBalance: getCoinBalance(),
        referralCode: localStorage.getItem('referralCode'),
    };
    fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
function syncLocalData() {
    const data = {
        coinBalance: getCoinBalance(),
        referralCode: localStorage.getItem('referralCode'),
    }function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = notification ${type};
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
showNotification('Coins updated!', 'success');
function connectWallet() {
    const walletAddress = document.getElementById("walletAddress").value;
    if (walletAddress) {
        document.getElementById("walletStatus").textContent = "Connecting...";
        // Simulate wallet connection delay
        setTimeout(function() {
            document.getElementById("walletStatus").textContent = "Wallet Connected: " + walletAddress;
            // Here you can also store the wallet address in localStorage or send it to your backend
            localStorage.setItem("walletAddress", walletAddress);
        }, 2000);  // Simulating a 2-second delay
    } else {
        document.getElementById("walletStatus").textContent = "Please enter a valid wallet address.";
    }
function redirectToWalletConnect() {
    // Here you need to redirect to a new page where the wallet connect option is available
    window.location.href = "wallet-connect.html";  // The new page that will have the wallet connect option
}
