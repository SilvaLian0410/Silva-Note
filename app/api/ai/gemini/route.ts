import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { NextResponse } from 'next/server';

// Initialize the model
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  apiKey: process.env.API_KEY_GEMINI_GOOGLE!,
  maxOutputTokens: 2048,
});

// Define the output parser
const outputParser = new JsonOutputParser();

// Create the prompt template
const promptTemplate = PromptTemplate.fromTemplate(`
  Context:
  Current Title: {currentTitle}
  Current Description: {currentDescription}
  User Request: {userRequest}

  Create a detailed note following these requirements:
  1. A clear, specific title
  2. Write a detailed description
  
  Format the response as a JSON object with 'title' and 'description' fields.
  Do not include any markdown or formatting in the description.
  
  ${outputParser.getFormatInstructions()}
`);

interface AIResponse {
  title: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const { message, context } = await request.json();

    // Create the chain
    const chain = promptTemplate
      .pipe(model)
      .pipe(outputParser);

    // Run the chain
    const response = await chain.invoke({
      currentTitle: context.title,
      currentDescription: context.description,
      userRequest: message,
      format_instructions: outputParser.getFormatInstructions()
    }) as AIResponse;

    return NextResponse.json({
      title: response.title.trim(),
      description: response.description.trim()
    });

  } catch (error: any) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process AI request', details: error.message },
      { status: 500 }
    );
  }
}