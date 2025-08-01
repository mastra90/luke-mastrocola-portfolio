#!/bin/bash

# Portfolio deployment script
set -e

REPO_URL="https://github.com/mastra90/portfolio_2.0.git"
PROJECT_DIR="portfolio_2.0"
PORT=3000

echo "🚀 Deploying portfolio..."

# Clean up existing directory
if [ -d "$PROJECT_DIR" ]; then
    echo "Removing existing directory..."
    rm -rf "$PROJECT_DIR"
fi

# Clone repository
echo "Cloning repository..."
git clone "$REPO_URL"

# Navigate to project
cd "$PROJECT_DIR"

# Stop any existing containers
echo "Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Build and run
echo "Building and starting application..."
docker-compose up --build -d

echo "✅ Portfolio deployed successfully!"
echo "🌐 Access at: http://localhost:$PORT"

# Show running containers
docker-compose ps