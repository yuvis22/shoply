import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadImage = async (
  file: Buffer,
  fileName: string,
  contentType: string
) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: `products/${fileName}`,
    Body: file,
    ContentType: contentType,
    // ACL: 'public-read', // Removed due to bucket owner enforced
  };

  try {
    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw error;
  }
};

export const deleteImage = async (fileName: string) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: `products/${fileName}`,
  };

  try {
    await s3.deleteObject(params).promise();
  } catch (error) {
    console.error("Error deleting from S3:", error);
    throw error;
  }
};
