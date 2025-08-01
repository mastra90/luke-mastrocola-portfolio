#!/bin/bash

# Portfolio deployment script
set -e

REPO_URL="https://github.com/mastra90/portfolio_2.0.git"
PROJECT_DIR="portfolio_2.0"
PORT=5173

echo "🚀 Deploying portfolio..."

# Store the parent directory path
PARENT_DIR=$(pwd)

# Clean up existing directory (using TSA script approach)
if [ -d "$PROJECT_DIR" ]; then
    echo "🗑️ Removing existing directory..."
    # Try to make files writable first, then remove
    chmod -R u+w "$PROJECT_DIR" 2>/dev/null || true
    rm -rf "$PROJECT_DIR" 2>/dev/null || sudo rm -rf "$PROJECT_DIR"
    echo "✅ Directory cleaned up!"
fi

# Clone repository
echo "Cloning repository..."
git clone --recursive "$REPO_URL"

# Navigate to project
cd "$PROJECT_DIR"

# Install dependencies
echo "📚 Installing dependencies..."
npm install

# Stop any existing containers
echo "🔄 Stopping any existing containers..."
docker compose down 2>/dev/null || true

# Kill any containers using port 5173
echo "🔧 Freeing up port 5173..."
CONTAINERS_ON_5173=$(docker ps --filter "publish=5173" -q 2>/dev/null)

if [ ! -z "$CONTAINERS_ON_5173" ]; then
    echo "   → Stopping containers using port 5173..."
    docker stop $CONTAINERS_ON_5173 2>/dev/null || true
fi

echo "✅ Port cleared!"

# Build and run with fallback (like TSA script)
echo "Building and starting application..."
if docker compose --profile dev up --build -d --remove-orphans 2>/dev/null; then
    echo "✅ Started with docker compose"
else
    echo "   → Trying legacy docker-compose..."
    docker-compose --profile dev up --build -d --remove-orphans
fi

# Clean up the downloaded deploy.sh from parent directory
rm -f "$PARENT_DIR/deploy.sh"

echo "✅ Portfolio deployed successfully!"
echo "🌐 Access at: http://localhost:$PORT"

# Wait for container to be ready
echo "⏳ Waiting for container to start..."
sleep 3

echo "🌐 Opening application in browser..."
python3 -m webbrowser http://localhost:$PORT 2>/dev/null || \
python -m webbrowser http://localhost:$PORT 2>/dev/null || \
open http://localhost:$PORT 2>/dev/null || \
start http://localhost:$PORT 2>/dev/null || \
echo "   → Please open http://localhost:$PORT manually"