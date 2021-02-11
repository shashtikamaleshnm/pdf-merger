const path = require('path');
const PDFMerger = require('pdf-merger-js');
const fileNames = require('./fileNames');

var merger = new PDFMerger();

(async() => {
    for(var i=0;i<fileNames.pdfsToMerge.length;i++) {
        merger.add(path.join(__dirname, '..', 'pdfs', fileNames.pdfsToMerge[i]));
    }

    await merger.save(path.join(__dirname, '..', 'pdfs', fileNames.finalPdfName));
})();