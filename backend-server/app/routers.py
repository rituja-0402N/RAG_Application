# from fastapi import FastAPI

# from pydantic import BaseModel
# from dotenv import load_dotenv
# from langchain_openai import ChatOpenAI
# import os

# # Load environment variables
# load_dotenv()
# OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# # Initialize FastAPI app
# app = FastAPI()

# # Define request model
# class QueryRequest(BaseModel):
#     query: str

# # Initialize OpenAI Model
# model = ChatOpenAI(model_name="gpt-4", openai_api_key=OPENAI_API_KEY)

# @app.post("/query")
# def query(request: QueryRequest):
#     response = model.invoke(request.query)
#     return {"response" : response.content if hasattr(response, "content") else response}