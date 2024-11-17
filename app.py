import os
import google.generativeai as genai
from dotenv import load_dotenv
import pandas as pd
import numpy as np
import streamlit as st

# Load environment variables
load_dotenv()

# Configure Google API
genai.configure(api_key='AIzaSyAS5p5QMLl-k5jCTKwUZLMBPi6d7uaaq_o')

# Helper function for data preprocessing
def load_and_preprocess_data():
    # Load the dataset
    new_customer_df = pd.read_csv('example_networks.csv')
    
    # Preprocess the data
    new_customer_df['network_speed'] = new_customer_df['network_speed'].str.replace(r'[^\d.]+', '', regex=True).astype(float)
    new_customer_df['city'] = new_customer_df['city'].astype('category').cat.codes
    new_customer_df['state'] = new_customer_df['state'].astype('category').cat.codes
    new_customer_df.set_index("acct_id", inplace=True)
    
    return new_customer_df

# Helper function to get recommendations based on network parameters
def get_recommendations(random_row):
    recommendations = []
    
    # Dummy calculations for the various network metrics (replace with your actual functions)
    avg_throughput = random_row['rx_avg_bps'] + random_row['tx_avg_bps']  # Replace with actual calculation
    network_utilization = random_row['rx_max_bps'] / random_row['network_speed']  # Replace with actual calculation
    signal_range = random_row['rssi_max'] - random_row['rssi_min']  # Replace with actual calculation
    signal_reliability = random_row['rssi_mean'] / random_row['rssi_max']  # Replace with actual calculation
    rssi_deg = random_row['rssi_mean'] - random_row['rssi_median']  # Replace with actual calculation
    client_density_value = (random_row['wireless_clients_count'] + random_row['wired_clients_count']) / random_row['extenders']  # Replace with actual calculation
    client_load = random_row['rx_avg_bps'] + random_row['tx_avg_bps']  # Replace with actual calculation
    streaming_suitability_value = random_row['rx_avg_bps'] / random_row['tx_avg_bps']  # Replace with actual calculation
    network_stability_value = random_row['tx_max_bps'] / random_row['rx_max_bps']  # Replace with actual calculation
    client_experience_value = random_row['tx_avg_bps'] - random_row['rx_avg_bps']  # Replace with actual calculation

    # Generate recommendations based on conditions
    if avg_throughput < 50_000:
        recommendations.append("Upgrade extenders or bandwidth for better device performance.")
    if network_utilization > 0.7:
        recommendations.append("Consider a higher-speed plan to avoid peak usage issues.")
    if signal_range > 45:
        recommendations.append("Add extenders or Whole Home Wi-Fi for better coverage.")
    if signal_reliability < 0.75:
        recommendations.append("Optimize router placement or improve router quality.")
    if rssi_deg < -5:
        recommendations.append("Reposition router or upgrade hardware to improve signal reliability.")
    if client_density_value > 25:
        recommendations.append("Add extenders to handle high client density.")
    if client_load > 1_000_000:
        recommendations.append("Add additional extenders to balance the load.")
    if streaming_suitability_value < 1:
        recommendations.append("Upgrade bandwidth to improve streaming capabilities.")
    if network_stability_value > 1.5:
        recommendations.append("Address network stability with extenders or better plans.")
    if client_experience_value > 200_000:
        recommendations.append("Improve balance between download and upload speeds with better plans or hardware.")
    
    return recommendations

# Function to update knowledge base from the selected row
def update_knowledge_base(random_row):
    knowledge_base = {
        'extenders': random_row['extenders'],
        'wireless_clients_count': random_row['wireless_clients_count'],
        'wired_clients_count': random_row['wired_clients_count'],
        'rx_avg_bps': random_row['rx_avg_bps'],
        'tx_avg_bps': random_row['tx_avg_bps'],
        'rx_p95_bps': random_row['rx_p95_bps'],
        'tx_p95_bps': random_row['tx_p95_bps'],
        'rx_max_bps': random_row['rx_max_bps'],
        'tx_max_bps': random_row['tx_max_bps'],
        'rssi_mean': random_row['rssi_mean'],
        'rssi_median': random_row['rssi_median'],
        'rssi_max': random_row['rssi_max'],
        'rssi_min': random_row['rssi_min'],
        'network_speed': random_row['network_speed']
    }
    return knowledge_base

# Streamlit UI elements
st.title("Bolt: Frontier's Internet Assistant")
st.write("Hello! I'm Bolt, your friendly assistant from Frontier.\n"
        "I'm here to help you find the best options for your internet needs. Whether you're looking for speed upgrades, "
        "the perfect plan, or ways to improve your Wi-Fi, I've got you covered.\n"
        "I also have a list of personalized recommendations based on your preferences, and I can provide more details "
        "about each one whenever you're ready!\n"
        "Just ask, and I'll provide all the information you need. \n")

# Load the dataset and preprocess it
new_customer_df = load_and_preprocess_data()

# Randomly select a row for demonstration
random_row = new_customer_df.sample(n=1)

# Display recommendations when the button is clicked
if st.button('Get Recommendations'):
    recommendations = get_recommendations(random_row.iloc[0])  # Get recommendations for the randomly selected row
    if recommendations:
        for rec in recommendations:
            st.write(f"- {rec}")
    else:
        st.write("No specific recommendations at this moment.")

knowledge_base = update_knowledge_base(random_row.iloc[0])

# System instruction with knowledge base information
system_instruction = """
You are a highly knowledgeable expert on everything Frontier Internet offers, equipped with a deep understanding of both the technical requirements and service options available to customers. From ensuring optimal performance for various devices to navigating the best pricing and add-on packages, you help customers make informed decisions based on their specific needs. Bandwidth Needs for Devices: You know exactly what bandwidth is required for every device and activity in a home or office. For example: Smart speakers, light bulbs, and appliances only need 1-3 Mbps, making them perfect for users looking to control their homes with minimal bandwidth consumption. Smart TVs streaming 4K video require a robust 35+ Mbps connection to ensure smooth, buffer-free viewing, especially as households adopt more high-definition streaming content. For users who enjoy gaming, especially when downloading large files, you are aware that a 100+ Mbps connection is essential, and for heavy-duty downloads, such as Call of Duty: MW3 or Baldur’s Gate 3, speeds of 1,000 Mbps and 1,200 Mbps, respectively, are required to keep up with the demands of these fast-paced, data-heavy games. Frontier Internet Plans: You're well-versed in Frontier’s internet plans and can explain the differences in bandwidth, equipment, and pricing to suit every user's need: Fiber 500 provides a reliable 500 Mbps connection for $45/month, perfect for standard browsing, streaming, and light gaming, with one standard Wi-Fi router included. For households with more devices or those who require faster speeds, Fiber 1 Gig at $65/month offers 1 Gbps speeds, ideal for heavy streaming and multiple connected devices. Users who need the highest performance can choose Fiber 2 Gig for $99/month, which includes 2 Gbps speeds and an upgraded Wi-Fi router plus an extender, ideal for ultra-fast streaming and gaming across multiple rooms. For users needing extreme speeds, Fiber 7 Gig offers 7 Gbps for $299/month, which is ideal for tech-heavy homes or small businesses with high demand for simultaneous, ultra-fast internet access. This plan also includes a premium router and an extender at no extra cost. Add-Ons and Upgrades: As an expert, you can also explain how various add-ons enhance users' internet experience: Whole-Home Wi-Fi ($10/month) helps eliminate dead spots and buffering by providing up to two additional extenders for Fiber 2 Gig speeds and below, or one extender for higher plans like Fiber 5 and 7 Gig. Unbreakable Wi-Fi ($25/month) is a critical service for Frontier Fiber Internet customers, offering backup internet during unexpected outages with 130GB of 4G LTE cellular data per month. You can even guide users through setting up this service via a self-install mobile app or a free tech installation. For added security, Wi-Fi Security ($5/month) protects devices from malicious sites, phishing, and other online threats, and Wi-Fi Security Plus ($10/month) adds a VPN and password manager, ensuring customers can keep their information safe while browsing and gaming. Additional Services: Identity Protection ($10/month), which includes personal information monitoring and up to $1 million in identity theft insurance, can be added to safeguard personal data. For families with multiple users, you can advise on the Family Add-On ($5/month per additional user) to extend coverage to more individuals. By combining your knowledge of Frontier's service offerings, such as unbreakable Wi-Fi, Wi-Fi Security, and specialized plans tailored to high-demand devices like gaming consoles and smart home devices, you make it easy for customers to choose the right plan and ensure optimal performance at home. Your detailed understanding of bandwidth requirements for everything from smart thermostats to Microsoft Flight Simulator 2024 helps customers ensure they are selecting a plan that meets their needs for both speed and reliability. With your guidance, Frontier customers can easily navigate their options and enjoy the best service tailored to their unique requirements.

1. **Network Parameters**:
- Extenders: {extenders}
- Wireless clients count: {wireless_clients_count}
- Wired clients count: {wired_clients_count}
- RX Average BPS: {rx_avg_bps}
- TX Average BPS: {tx_avg_bps}
- RX P95 BPS: {rx_p95_bps}
- TX P95 BPS: {tx_p95_bps}
- RX Max BPS: {rx_max_bps}
- TX Max BPS: {tx_max_bps}
- RSSI Mean: {rssi_mean}
- RSSI Median: {rssi_median}
- RSSI Max: {rssi_max}
- RSSI Min: {rssi_min}
- Network Speed: {network_speed}

"""
system_instruction = system_instruction.format(
    extenders=knowledge_base['extenders'],
    wireless_clients_count=knowledge_base['wireless_clients_count'],
    wired_clients_count=knowledge_base['wired_clients_count'],
    rx_avg_bps=knowledge_base['rx_avg_bps'],
    tx_avg_bps=knowledge_base['tx_avg_bps'],
    rx_p95_bps=knowledge_base['rx_p95_bps'],
    tx_p95_bps=knowledge_base['tx_p95_bps'],
    rx_max_bps=knowledge_base['rx_max_bps'],
    tx_max_bps=knowledge_base['tx_max_bps'],
    rssi_mean=knowledge_base['rssi_mean'],
    rssi_median=knowledge_base['rssi_median'],
    rssi_max=knowledge_base['rssi_max'],
    rssi_min=knowledge_base['rssi_min'],
    network_speed=knowledge_base['network_speed']
)

generation_config = {
    "temperature": 0,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    system_instruction=system_instruction
)

history = []

history.append({"role": "user", "parts": system_instruction})

# Input from user for the chatbot
user_input = st.text_input("Ask Bolt for assistance:")

if user_input:
    # Initialize the model and start chat session
    chat_session = model.start_chat(history=history)
    response = chat_session.send_message(user_input)
    model_response = response.text
    history.append({"role": "user", "parts": [user_input]})

    # Display chatbot response
    st.write(f"Netnavigator: {model_response}")
    history.append({"role": "model", "parts": [model_response]})
