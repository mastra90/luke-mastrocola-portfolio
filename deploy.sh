#!/bin/bash
set -e
REPO_URL="https://github.com/mastra90/luke-mastrocola-portfolio.git"
PROJECT_DIR="luke-mastrocola-portfolio"
PORT=5173

# Docker check loop
set +e

LINES_TO_CLEAR=8

while true; do
    if [[ "$RETRY" == true ]]; then
        for ((i = 0; i < LINES_TO_CLEAR; i++)); do
            tput cuu1
            tput el
        done
    fi

    echo -e "🔍 Checking if Docker services are running...\n"

    if docker info > /dev/null 2>&1; then
        echo "✅ Docker is running!"
        echo ""
        break
    else
        sleep 1
        echo "❌ Docker is not running."
        echo ""
        echo "🐳 Run Docker and press y to continue."
        echo "🐳 Press any other key to cancel."
        echo ""
        read -p "🔁 Continue? (y): " input

        if [[ "$input" == [Yy] ]]; then
            RETRY=true
            continue
        else
            echo -e "\n👋 Deployment cancelled"
            exit 0
        fi
    fi
done

set -e
echo ""
echo "🚀 Deploying luke-mastrocola-portfolio..."

PARENT_DIR=$(pwd)

if [ -d "$PROJECT_DIR" ]; then
    echo "🗑️ Removing existing directory..."
    echo ""
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