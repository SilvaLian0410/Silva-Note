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

const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI_GOOGLE || '')

async function analyzeImage(imageData: string) {
  try {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const imageBytes = Buffer.from(imageData.split(',')[1], 'base64');

    // Create image part
    const imagePart = {
      inlineData: {
        data: Buffer.from(imageBytes).toString('base64'),
        mimeType: 'image/jpeg'
      }
    };

    const prompt = "Describe this image in detail and extract any visible text. Format the response as a clear description.";

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Image analysis error:', error);
    throw error;
  }
}

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
    const { message, context, image, imageOnly } = await request.json();

    // If it's an image-only analysis request
    if (imageOnly && image) {
      const imageAnalysis = await analyzeImage(image);
      return NextResponse.json({
        title: "Image Analysis",
        description: imageAnalysis
      });
    }

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