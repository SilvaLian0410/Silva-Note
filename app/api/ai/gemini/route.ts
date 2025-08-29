import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { NextResponse } from 'next/server';

// Initialize the models
const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI_GOOGLE || '');
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-2.5-flash",
  apiKey: process.env.API_KEY_GEMINI_GOOGLE!,
  maxOutputTokens: 2048,
});

export async function POST(req: Request) {
  try {
    const { message, context, image } = await req.json();
    const outputParser = new JsonOutputParser();

    // If there's an image, analyze it first
    let imageAnalysis = '';
    if (image) {
      const visionModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const imageBytes = Buffer.from(image.split(',')[1], 'base64');
      
      const imagePart = {
        inlineData: {
          data: Buffer.from(imageBytes).toString('base64'),
          mimeType: 'image/jpeg'
        }
      };

      const imageResult = await visionModel.generateContent([
        "Describe this image in detail and extract any visible text. Format the response as a clear description.",
        imagePart
      ]);
      imageAnalysis = (await imageResult.response).text();
    }

    // Create the prompt template with image analysis included
    const promptTemplate = PromptTemplate.fromTemplate(`
      Context:
      Current Title: {currentTitle}
      Current Description: {currentDescription}
      ${imageAnalysis ? `Image Analysis: ${imageAnalysis}` : ''}
      User Request: {userRequest}

      Create a detailed note following these requirements:
      1. A clear, specific title
      2. Write a detailed description
      
      Format the response as a JSON object with 'title' and 'description' fields.
      Do not include any markdown or formatting in the description.
      
      ${outputParser.getFormatInstructions()}
    `);

    const chain = promptTemplate.pipe(model).pipe(outputParser);

    const response = await chain.invoke({
      currentTitle: context.title || '',
      currentDescription: context.description || '',
      userRequest: message,
    });

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
