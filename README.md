# Luke Mastrocola portfolio

To run the project download open the Docker Desktop app and run this command in a bash terminal:

```bash
curl -sSL https://raw.githubusercontent.com/mastra90/luke-mastrocola-portfolio/master/deploy.sh | bash && cd luke-mastrocola-portfolio
```

Compatible with Mac OSX, Linux and Windows with Ubuntu installed.

This command does the following:

- Removes, recreates and cd's into a directory called 'lukes-portfolio'
- Clones the github repo, provides access rights to the deply.sh file and runs it
- The script dockerizes the project and opens it in the browser (http://127.0.0.1:3000/) 

