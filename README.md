# Elasticsearch Research

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
- Create a file called '.env' and store your password in it (ELASTIC_PASSWORD=xxxxxxxxxxx)
- Install and activate a virtual environment
    - `python -m venv venv`
    - `source venv/bin/activate`
- Install the required packages
    - `pip install jupyter`
    - `pip install ipykernel`
    - `python -m ipykernel install --user --name=your_env_name`
    - `pip install elasticsearch`




## jupyterproject
- Run /jupyterproject/scrape.ipynb to extract sample FAQs
- Run /jupyterproject/Elasticsearch1.ipynb to index the FAQs
