import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json(
            { error: "Missing 'id' parameter" },
            { status: 400 }
        );
    }

    const filePath = path.join(process.cwd(), 'public', 'content', 'issues', `${id}.json`);

    try {
        if (!fs.existsSync(filePath)) {
            return NextResponse.json(
                { error: `File ${id}.json not found` },
                { status: 404 }
            );
        }

        const jsonData = fs.readFileSync(filePath, 'utf-8');
        return NextResponse.json({ data: JSON.parse(jsonData) });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Failed to read issue data" },
            { status: 500 }
        );
    }
}