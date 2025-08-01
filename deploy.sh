#!/bin/bash
set -e
REPO_URL="https://github.com/mastra90/luke-mastrocola-portfolio.git"
PROJECT_DIR="luke-mastrocola-portfolio"
PORT=5173

echo "🚀 Deploying luke-mastrocola-portfolio..."

PARENT_DIR=$(pwd)

if [ -d "$PROJECT_DIR" ]; then
    echo "🗑️ Removing existing directory..."
    chmod -R u+w "$PROJECT_DIR" 2>/dev/null || true
    rm -rf "$PROJECT_DIR" 2>/dev/null || sudo rm -rf "$PROJECT_DIR"
fi

git clone --recursive "$REPO_URL"
cd "$PROJECT_DIR"

npm install

docker compose down 2>/dev/null || true

CONTAINERS_ON_5173=$(docker ps --filter "publish=5173" -q 2>/dev/null)
if [ ! -z "$CONTAINERS_ON_5173" ]; then
    docker stop $CONTAINERS_ON_5173 2>/dev/null || true
fi

if docker compose up --build -d --remove-orphans 2>/dev/null; then
    echo "✅ Started"
else
    docker-compose up --build -d --remove-orphans
fi

rm -f "$PARENT_DIR/deploy.sh"
sleep 2

python3 -m webbrowser http://localhost:$PORT 2>/dev/null || \
python -m webbrowser http://localhost:$PORT 2>/dev/null || \
open http://localhost:$PORT 2>/dev/null || \
echo "Open http://localhost:$PORT"