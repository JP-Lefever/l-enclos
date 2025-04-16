import { type NextRequest, NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const generateFileName = (file: File) => {
	const timestamp = Date.now();
	return `${timestamp}-${file.name.replace(/\s/g, "_")}`;
};

export const POST = async (req: NextRequest) => {
	try {
		const fileData = await req.formData();
		const uploadDir = path.join(process.cwd(), "public/uploads");

		const uploadedFiles: Record<string, string> = {};

		for (const [fieldName, file] of fileData.entries()) {
			if (file instanceof File) {
				const fileName = generateFileName(file);

				const filePath = path.join(uploadDir, fileName);

				const fileBuffer = await file.arrayBuffer();
				await writeFile(filePath, Buffer.from(fileBuffer));

				uploadedFiles[fieldName] = `/uploads/${fileName}`;
			}
		}

		return NextResponse.json({ success: true, files: uploadedFiles });
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json({ success: false, error: error }, { status: 500 });
	}
};
