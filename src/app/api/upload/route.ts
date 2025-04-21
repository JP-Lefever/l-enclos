import { type NextRequest, NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const MIME_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTE = MAX_SIZE_MB * 1024 * 1024;

const generateFileName = (file: File) => {
	const timestamp = Date.now();
	return `${timestamp}-${file.name.replace(/\s/g, "_")}`;
};

export const POST = async (req: NextRequest) => {
	try {
		const fileData = await req.formData();
		const uploadDir = path.join(process.cwd(), "public/uploads");

		const uploadedFiles: Record<string, string> = {};
		console.log(uploadedFiles);

		for (const [fieldName, file] of fileData.entries()) {
			if (file instanceof File) {
				if (!MIME_TYPES.includes(file.type)) {
					return NextResponse.json({
						status: 400,
						message: "Format non accepté",
					});
				}

				const fileBuffer = await file.arrayBuffer();
				if (fileBuffer.byteLength > MAX_SIZE_BYTE) {
					return NextResponse.json({
						status: 400,
						message: "Taille maximum 10mo",
					});
				}

				const fileName = generateFileName(file);

				const filePath = path.join(uploadDir, fileName);

				await writeFile(filePath, Buffer.from(fileBuffer));

				uploadedFiles[fieldName] = `/uploads/${fileName}`;
			}
		}

		return NextResponse.json(uploadedFiles);
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json({ success: false, error: error }, { status: 500 });
	}
};
