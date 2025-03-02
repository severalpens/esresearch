# Elasticsearch Research

## Objectives
- Tabular data
- embedding
- search optimisation
- FAQ
- index architecture
- vector embedding
- best practice for embedding 	
    - (dense & sparse)
    - standard (no embedding)		
- neuralseek - possible option

[Udemy Course](https://ibm-learning.udemy.com/course/elasticsearch-7-and-elastic-stack/learn/lecture/24785894)

## Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [GitHub Desktop](https://desktop.github.com/)
- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install) (or [Apple equivalent](https://developer.apple.com/support/unix/))
- [Python3](https://www.python.org/downloads/)
- [Jupyter](https://jupyter.org/install)
- [VS Code](https://code.visualstudio.com/) (and related extensions e.g., [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter))


## Getting Started (General)
- [Run Elasticsearch locally](https://www.elastic.co/guide/en/elasticsearch/reference/current/run-elasticsearch-locally.html)


## Projects

### jupyterproject
- Open /jupyterproject in VS Code
- Create a file called '.env' and store your password in it (ELASTIC_PASSWORD=xxxxxxxxxxx)
- (optional) Install and activate a virtual environment
    - `python -m venv venv`
    - `source venv/bin/activate`
- (optional) Install the required packages
    - `pip install jupyter`
    - `pip install ipykernel`
    - `python -m ipykernel install --user --name=your_env_name`
    - `pip install elasticsearch`
- Run /jupyterproject/b1_scrape.ipynb to extract sample FAQs
- Run /jupyterproject/b2_populate.ipynb to index the FAQs
- etc


### Node.js API
- relocated to standalone repo: severalpens/esresearchapi

### React Client
- relocated to standalone repo: severalpens/elasticsearchclient

