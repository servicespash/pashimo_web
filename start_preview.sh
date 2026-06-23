#!/bin/bash
echo "=================================================="
echo "🚀 Starting Pashimo Local Preview Server..."
echo "=================================================="
echo "📍 Access your project using these addresses:"
echo "--------------------------------------------------"
echo "👉 Locally on this device: http://localhost:8080"
echo "👉 On your network (PC/Other Phones):"
# Extracting your local IP address dynamically
ifconfig | grep -E "inet " | grep -v "127.0.0.1" | awk '{print "   http://" $2 ":8080"}'
echo "--------------------------------------------------"
echo "👉 Press CTRL + C to stop the preview server."
echo "=================================================="

# Spin up Python's built-in lightweight web server module
python -m http.server 8080
