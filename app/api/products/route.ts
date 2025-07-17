import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Product } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('storehub');
    const collection = db.collection<Product>('products');

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '12');
    const page = parseInt(searchParams.get('page') || '1');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') === 'desc' ? -1 : 1;

    let filter = {};
    if (category && category !== 'all') {
      filter = { category };
    }

    const products = await collection
      .find(filter)
      .sort({ [sortBy]: sortOrder })
      .limit(limit)
      .skip((page - 1) * limit)
      .toArray();

    const total = await collection.countDocuments(filter);

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('storehub');
    const collection = db.collection<Product>('products');

    const productData = await request.json();
    const product: Product = {
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(product);
    
    return NextResponse.json(
      { message: 'Product created successfully', productId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}