#!/bin/bash

# Setup script for AI Suite development environment
# This script sets up the app for local development

echo "🚀 Setting up AI Suite..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created. Please update it if needed."
else
    echo "✅ .env file already exists."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully."
else
    echo "❌ Failed to install dependencies."
    exit 1
fi

# Create necessary directories
mkdir -p src/services
mkdir -p src/components

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "   1. Make sure your backend is running on http://localhost:3001"
echo "   2. Run 'npm start' to start the development server"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "📱 For mobile testing:"
echo "   - iOS: Use Safari on your iPhone, scan QR code or use local network IP"
echo "   - Android: Use Chrome, scan QR code or use local network IP"
echo ""
echo "🔧 Environment variables:"
echo "   - REACT_APP_ENV: development"
echo "   - REACT_APP_API_BASE_URL: http://localhost:3001"
echo "   - REACT_APP_API_TIMEOUT: 10000"
echo ""
