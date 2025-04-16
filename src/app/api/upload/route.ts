import { type NextRequest, NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import path from "node:path";

// Fonction pour générer un nom unique pour chaque fichier
const generateFileName = (file: File) => {
	const timestamp = Date.now();
	return `${timestamp}-${file.name.replace(/\s/g, "_")}`;
};

// POST handler
export const POST = async (req: NextRequest) => {
	try {
		const fileData = await req.formData();
		const uploadDir = path.join(process.cwd(), "public/uploads");

		// Créer un objet pour garder trace des noms de fichiers
		const uploadedFiles: Record<string, string> = {};

		// On boucle sur tous les fichiers reçus
		for (const [fieldName, file] of fileData.entries()) {
			if (file instanceof File) {
				// Générer un nom de fichier unique pour chaque image
				const fileName = generateFileName(file);

				// Créer un chemin d'upload pour chaque fichier
				const filePath = path.join(uploadDir, fileName);

				// Convertir le fichier en buffer et l'enregistrer sur le serveur
				const fileBuffer = await file.arrayBuffer();
				await writeFile(filePath, Buffer.from(fileBuffer));

				// Ajouter le nom du fichier à l'objet
				uploadedFiles[fieldName] = `/uploads/${fileName}`;
			}
		}

		// Retourner les noms des fichiers uploadés
		return NextResponse.json({ success: true, files: uploadedFiles });
	} catch (error) {
		console.error("Upload error:", error);
		return NextResponse.json({ success: false, error: error }, { status: 500 });
	}
};
