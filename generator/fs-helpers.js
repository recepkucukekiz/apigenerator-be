const fs = require('fs');

// Klasör oluşturma işlemi (senkron)
function createDirectory(directoryPath) {
    try {
        fs.mkdirSync(directoryPath);
        console.log('Directory created successfully.');
    } catch (error) {
        console.error(`Failed to create directory: ${error}`);
    }
}

// Klasör silme işlemi (senkron)
function deleteDirectory(directoryPath) {
    try {
        fs.rmdirSync(directoryPath, { recursive: true });
        console.log('Directory deleted successfully.');
    } catch (error) {
        console.error(`Failed to delete directory: ${error}`);
    }
}

// Klasör taşıma işlemi (senkron)
function moveDirectory(sourceDirectory, targetDirectory) {
    try {
        fs.renameSync(sourceDirectory, targetDirectory);
        console.log('Directory moved successfully.');
    } catch (error) {
        console.error(`Failed to move directory: ${error}`);
    }
}

// Dosya okuma işlemi (senkron)
function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (error) {
        console.error(`Failed to read the file: ${error}`);
        return null;
    }
}

// Dosya silme işlemi (senkron)
function deleteFile(filePath) {
    try {
        fs.unlinkSync(filePath);
        console.log('File deleted successfully.');
    } catch (error) {
        console.error(`Failed to delete the file: ${error}`);
    }
}

// Dosya taşıma işlemi (senkron)
function moveFile(sourceFilePath, targetFilePath) {
    try {
        fs.renameSync(sourceFilePath, targetFilePath);
        console.log('File moved successfully.');
    } catch (error) {
        console.error(`Failed to move the file: ${error}`);
    }
}

// Dosya yazma işlemi (senkron)
function writeFile(filePath, data) {
    try {
        fs.writeFileSync(filePath, data, 'utf8');
        console.log('Data written to the file successfully.');
    } catch (error) {
        console.error(`Failed to write to the file: ${error}`);
    }
}

module.exports = {
    createDirectory,
    deleteDirectory,
    moveDirectory,
    readFile,
    deleteFile,
    moveFile,
    writeFile,
};
