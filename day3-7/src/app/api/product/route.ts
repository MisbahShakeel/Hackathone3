import { NextResponse } from 'next/server';
import data from '@/data/chair.json';

export async function GET() {
    return NextResponse.json(data);
}

