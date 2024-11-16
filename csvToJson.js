const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

// Path to your CSV file
const csvFilePath = path.join(__dirname, 'data', 'current_customers.csv'); // Adjust the file name as needed

// Function to convert CSV to JSON
async function convertCsvToJson() {
  try {
    // Convert the CSV file to a JSON object
    const jsonArray = await csv().fromFile(csvFilePath);

    // Structure your customer data based on the CSV columns
    const customerData = jsonArray.map(customer => {
      return {
        acct_id: customer['acct_id'], // Customer Account ID
        extenders: customer['extenders'], // Number of extenders
        wireless_clients_count: customer['wireless_clients_count'], // Number of wireless clients
        wired_clients_count: customer['wired_clients_count'], // Number of wired clients
        rx_avg_bps: customer['rx_avg_bps'], // Average received bandwidth in bps
        tx_avg_bps: customer['tx_avg_bps'], // Average transmitted bandwidth in bps
        rx_p95_bps: customer['rx_p95_bps'], // 95th percentile received bandwidth
        tx_p95_bps: customer['tx_p95_bps'], // 95th percentile transmitted bandwidth
        rx_max_bps: customer['rx_max_bps'], // Maximum received bandwidth
        tx_max_bps: customer['tx_max_bps'], // Maximum transmitted bandwidth
        rssi_mean: customer['rssi_mean'], // Average RSSI
        rssi_median: customer['rssi_median'], // Median RSSI
        rssi_max: customer['rssi_max'], // Max RSSI
        rssi_min: customer['rssi_min'], // Min RSSI
        network_speed: customer['network_speed'], // Network speed (Mbps or Gbps)
        city: customer['city'], // Customer's city
        state: customer['state'], // Customer's state
        whole_home_wifi: customer['whole_home_wifi'] === 'true', // Boolean (converted from string)
        wifi_security: customer['wifi_security'] === 'true', // Boolean (converted from string)
        wifi_security_plus: customer['wifi_security_plus'] === 'true', // Boolean (converted from string)
        premium_tech_pro: customer['premium_tech_pro'] === 'true', // Boolean (converted from string)
        identity_protection: customer['identity_protection'] === 'true', // Boolean (converted from string)
        family_identity_protection: customer['family_identity_protection'] === 'true', // Boolean (converted from string)
        total_shield: customer['total_shield'] === 'true', // Boolean (converted from string)
        youtube_tv: customer['youtube_tv'] === 'true', // Boolean (converted from string)
        // Adding additional fields as needed for troubleshooting or customer recommendations
        high_bandwidth_usage: calculateHighBandwidthUsage(customer), // Custom logic to flag high bandwidth usage
        poor_rssi: isPoorRSSI(customer) // Custom logic to flag poor RSSI conditions
      };
    });

    // Write the JSON data to a file
    const jsonFilePath = path.join(__dirname, 'data', 'customer_data.json');
    fs.writeFileSync(jsonFilePath, JSON.stringify(customerData, null, 2));

    console.log('CSV to JSON conversion successful! JSON data saved to:', jsonFilePath);
  } catch (err) {
    console.error('Error during conversion:', err);
  }
}

// Custom logic to identify high bandwidth usage (you can tweak these thresholds)
function calculateHighBandwidthUsage(customer) {
  const highBandwidthThreshold = 1000000; // Set an appropriate threshold for high bandwidth in bps
  return parseInt(customer['rx_max_bps']) > highBandwidthThreshold || parseInt(customer['tx_max_bps']) > highBandwidthThreshold;
}

// Custom logic to identify poor RSSI (if RSSI mean is worse than -60 dBm, for example)
function isPoorRSSI(customer) {
  const poorRSSIThreshold = -60; // Threshold below which RSSI is considered poor
  return parseInt(customer['rssi_mean']) < poorRSSIThreshold;
}

// Call the function to perform the conversion
convertCsvToJson();
