
import os
from langchain_openai import OpenAIEmbeddings
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("Missing OpenAI API Key. Make sure it's set in the .env file.")
def get_embedding_function():
    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    return embeddings
