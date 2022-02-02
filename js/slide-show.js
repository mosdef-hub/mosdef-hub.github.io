/* globals $, pdfjsLib*/

$(document).ready(function () {
    const PDF_URL = "/images/mosdef_2021_aiche_true.pdf";
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js";

    let pdfDoc = null,
        pageRendering = false,
        pageNumPending = null,
        canvas = document.querySelector('#pdf-canvas'),
        ctx = canvas.getContext('2d'),
        numPages = 0;

    async function renderPage(num) {
        pageRendering = true;
        const page = await pdfDoc.getPage(num);
        const container = document.querySelector("#pdf-container");
        let viewport = page.getViewport({scale: 1.0});
        const scale = container.clientWidth / viewport.width;
        viewport = page.getViewport({scale: scale * 0.90});
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        await page.render(renderContext);
        pageRendering = false;
        if(pageNumPending != null) {
            await renderPage(pageNumPending);
            pageNumPending = null;
        }
    }

    async function queueRenderPage(num) {
        if(pageRendering) {
            pageNumPending = num;
        } else {
            await renderPage(num);
        }
    }

    const loadingTask = pdfjsLib.getDocument(PDF_URL);

    loadingTask.promise.then(async (pdf) => {
        pdfDoc = pdf;
        numPages = pdfDoc.numPages;
        let currentPage = 1, interval;
        await queueRenderPage(currentPage);
        const container = document.querySelector("#pdf-container");
        const prev = document.querySelector('#prevSlide');
        const next = document.querySelector("#nextSlide");
        const progressBar = document.querySelector("#slideLoader");

        container.addEventListener('mouseover', () => {
            prev.style.display = 'block';
            next.style.display = 'block';
            if(interval) {
                clearInterval(interval);
            }
        });

        container.addEventListener('mouseout', () => {
            prev.style.display = 'none';
            next.style.display = 'none';
            if(!interval) {
                interval = setInterval(goToNextPage, 10000);
            }
        });

        const showProgress = (currentPage, totalPages) => {
            progressBar.style.width = `${currentPage/totalPages*100}%`;
        };

        const goToNextPage = () => {
            currentPage++;
            if(currentPage > numPages) {
                currentPage = 1;
            }
            queueRenderPage(currentPage);
            showProgress(currentPage, numPages);
        };

        const goToPrevPage = () => {
            currentPage--;
            if(currentPage === 0) {
                currentPage = numPages;
            }
            queueRenderPage(currentPage);
            showProgress(currentPage, numPages);
        };

        prev.addEventListener('click', goToPrevPage);
        next.addEventListener('click', goToNextPage);
        interval = setInterval(goToNextPage, 10000);
    });
});