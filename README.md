# Luke Mastrocola professional portfolio

To run the project download the Docker Desktop app and open it then run this command in a bash terminal:
Works on Mac, Linux and Windows with Ubuntu installed.

This command does the following:

- Removes, recreates and cd's into a directory called 'lukes-portfolio'
- Clones the github repo, provides access rights to the deply.sh file and runs it
- The script dockerizes the project and opens it in the browser (http://127.0.0.1:3000/) 

```rm -rf lukes-portfolio && mkdir lukes-portfolio && cd lukes-portfolio && git clone --recursive https://github.com/mastra90/portfolio_2.0.git && cd portfolio_2.0 && chmod +x deploy.sh && ./deploy.sh && sleep 2 && python3 -m webbrowser http://127.0.0.1:3000/ 2>/dev/null```