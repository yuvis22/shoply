import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/lib/aws-s3";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const file = formData.get("file");

    // Validate file
    if (!file || typeof file === "string" || !("arrayBuffer" in file)) {
      return NextResponse.json(
        { error: "No valid file uploaded" },
        { status: 400 }
      );
    }

    // Check AWS env vars
    const requiredVars = [
      "AWS_ACCESS_KEY_ID",
      "AWS_SECRET_ACCESS_KEY",
      "AWS_REGION",
      "AWS_S3_BUCKET",
    ];
    for (const v of requiredVars) {
      if (!process.env[v]) {
        return NextResponse.json(
          { error: `Missing environment variable: ${v}` },
          { status: 500 }
        );
      }
    }

    // Convert file to buffer
    // @ts-ignore
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // @ts-ignore
    const fileName = file.name || `upload-${Date.now()}`;
    // @ts-ignore
    const contentType = file.type || "application/octet-stream";

    // Upload to S3
    const imageUrl = await uploadImage(buffer, fileName, contentType);

    return NextResponse.json({ url: imageUrl }, { status: 201 });
  } catch (error) {
    // Final catch-all error
    return NextResponse.json(
      {
        error: "Failed to upload image",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
