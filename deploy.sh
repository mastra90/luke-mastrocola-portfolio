#!/bin/bash

# Portfolio deployment script
set -e

REPO_URL="https://github.com/mastra90/portfolio_2.0.git"
PROJECT_DIR="portfolio_2.0"
PORT=5173

echo "🚀 Deploying portfolio..."

# Clean up existing directory
if [ -d "$PROJECT_DIR" ]; then
    echo "Removing existing directory..."
    rm -rf "$PROJECT_DIR"
fi

# Clone repository
echo "Cloning repository..."
git clone --recursive "$REPO_URL"

# Navigate to project
cd "$PROJECT_DIR"

# Stop any existing containers
echo "Stopping existing containers..."
COMPOSE_API_VERSION=auto docker-compose down 2>/dev/null || true

# Kill any containers using port 5173
echo "🔧 Freeing up port 5173..."
CONTAINERS_ON_5173=$(docker ps --filter "publish=5173" -q 2>/dev/null)

if [ ! -z "$CONTAINERS_ON_5173" ]; then
    echo "   → Stopping containers using port 5173..."
    docker stop $CONTAINERS_ON_5173 2>/dev/null || true
fi

echo "✅ Port cleared!"

# Build and run with fallback (suppress warnings)
echo "Building and starting application..."
if COMPOSE_API_VERSION=auto docker-compose up --build -d 2>/dev/null; then
    echo "✅ Started with docker-compose"
else
    echo "   → Trying modern docker compose..."
    docker compose up --build -d 2>/dev/null
fi

echo "✅ Portfolio deployed successfully!"
echo "🌐 Access at: http://localhost:$PORT"
echo "🌐 Opening application in browser..."
python3 -m webbrowser http://localhost:$PORT 2>/dev/null || \
python -m webbrowser http://localhost:$PORT 2>/dev/null || \
open http://localhost:$PORT 2>/dev/null || \
start http://localhost:$PORT 2>/dev/null || \
echo "   → Please open http://localhost:$PORT manually"